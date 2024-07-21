// src/Interfaces/interfaces.ts
export interface Usuario {
  nombre: string;
  apellido: string;
  rut: string;
  telefonocasa: number;
  celular: number;
  edad: number;
  correo: string;
  fechanacimiento: string;
}

export interface tematica {
  id?: string;
  nombre: string;
  descripcion: string;
}
