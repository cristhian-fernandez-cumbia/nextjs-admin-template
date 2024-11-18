import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { query } from '@/libs/mysql';
import bcrypt from 'bcryptjs';
import { User as NextAuthUser } from 'next-auth';
import { User } from '@/interfaces/user';
import { Module, ModuleQueryResult, Submodule } from '@/interfaces/module';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Usuario', type: 'text', placeholder: 'usuario' },
        password: { label: 'Password', type: 'password', placeholder: '*****' }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Credenciales inválidas');
        }

        try {
          const results = await query<User>(
            'SELECT * FROM usuario WHERE email = ? AND estado = "S"',
            [credentials.username]
          );

          if (results.length > 0) {
            const userFound = results[0];

            if (!userFound) {
              throw new Error('Usuario no encontrado');
            }

            const isValidPassword = bcrypt.compareSync(credentials.password, userFound.password);
            if (!isValidPassword) {
              throw new Error('Contraseña incorrecta');
            }

            return {
              iduser: userFound.idusuario,
              email: userFound.email,
              name: userFound.nombres || null,
              lastname: userFound.apellidos || null,
              avatar: userFound.avatar || null,
              idperfil: userFound.idperfil || null
            } as NextAuthUser;
          } else {
            throw new Error('Usuario no encontrado');
          }
        } catch (error) {
          console.error('Error al autenticar:::', error);
          throw new Error(`Error al autenticar: ${error instanceof Error ? error.message : 'Error desconocido'}`);
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/error'
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.iduser = user.iduser;
        token.idperfil = user.idperfil;
        token.name = `${user.name} ${user.lastname}`;
        token.email = user.email;
        token.avatar = user.avatar;

        try {
          const modules = await query<ModuleQueryResult>(
            `SELECT m.idmodulo, m.nombre, m.icono, m.descripcion,
                    sm.idsubmodulo, sm.nombre AS submodulo_nombre, sm.ruta, sm.icono AS submodulo_icono, sm.descripcion AS submodulo_descripcion
             FROM perfil_submodulo ps
             JOIN submodulo sm ON ps.idsubmodulo = sm.idsubmodulo
             JOIN modulo m ON sm.idmodulo = m.idmodulo
             WHERE ps.idperfil = ? AND sm.estado = 'S' AND m.estado = 'S'`,
            [user.idperfil]
          );

          const groupedModules = modules.reduce((acc, module) => {
            const existingModule = acc.find(m => m.idmodulo === module.idmodulo);
            const submodule: Submodule = {
              idsubmodulo: module.idsubmodulo,
              nombre: module.submodulo_nombre,
              ruta: module.ruta,
              icono: module.submodulo_icono,
              descripcion: module.submodulo_descripcion,
              idmodulo: module.idmodulo,
            };

            if (existingModule) {
              existingModule.submodulos.push(submodule);
            } else {
              acc.push({
                idmodulo: module.idmodulo,
                nombre: module.nombre,
                icono: module.icono,
                descripcion: module.descripcion,
                submodulos: [submodule],
              });
            }
            return acc;
          }, [] as Module[]);
          token.modules = groupedModules;
        } catch (error) {
          console.error('Error al cargar los módulos en el token:', error);
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          iduser: token.iduser,
          idperfil: token.idperfil,
          name: token.name,
          email: token.email,
          avatar: token.avatar,
          modules: token.modules
        };
      }
      return session;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };