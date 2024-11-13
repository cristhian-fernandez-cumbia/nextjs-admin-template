import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      iduser: number;
      email: string;
      name?: string | null;
      lastname?: string | null;
      avatar?: string | null;
      idperfil?: number | null;
    } & DefaultSession['user'];
  }

  interface User {
    iduser: number;
    email: string;
    name?: string;
    lastname?: string;
    avatar?: string;
    idperfil?: number;
  }

  interface JWT {
    id?: string;
    email?: string;
  }
}