export interface ModuleQueryResult {
  idmodulo: number;
  nombre: string;
  icono: string;
  descripcion: string;
  idsubmodulo: number;
  submodulo_nombre: string;
  ruta: string;
  submodulo_icono: string;
  submodulo_descripcion: string;
}

// Las interfaces Module y Submodule siguen igual
export interface Submodule {
  idsubmodulo: number;
  nombre: string;
  ruta: string;
  icono: string;
  descripcion: string;
  idmodulo: number;
}

export interface Module {
  idmodulo: number;
  nombre: string;
  icono: string;
  descripcion: string;
  submodulos: Submodule[];
}