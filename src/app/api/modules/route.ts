import { NextRequest, NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';
import { query } from '@/libs/mysql';
import { Module, ModuleQueryResult, Submodule } from '@/interfaces/module';

async function adaptRequestForSession(req: NextRequest) {
  return {
    headers: {
      cookie: req.headers.get('cookie') || '',
    },
  };
}

export async function GET(req: NextRequest) {
  const adaptedReq = await adaptRequestForSession(req);
  const session = await getSession({ req: adaptedReq });
  if (!session) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  try {
    const userProfileId = session.user.idperfil;
    const modules = await query<ModuleQueryResult>(
      `SELECT m.idmodulo, m.nombre, m.icono, m.descripcion, 
              sm.idsubmodulo, sm.nombre AS submodulo_nombre, sm.ruta, sm.icono AS submodulo_icono, sm.descripcion AS submodulo_descripcion
       FROM perfil_submodulo ps
       JOIN submodulo sm ON ps.idsubmodulo = sm.idsubmodulo
       JOIN modulo m ON sm.idmodulo = m.idmodulo
       WHERE ps.idperfil = ? AND sm.estado = 'S' AND m.estado = 'S'`,
      [userProfileId]
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

    return NextResponse.json(groupedModules);
  } catch (error) {
    console.error('Error al obtener los módulos:::', error);
    return NextResponse.json({ error: 'Error al obtener los módulos' }, { status: 500 });
  }
}