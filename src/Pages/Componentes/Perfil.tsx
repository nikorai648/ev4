import React from 'react';

interface Props{
    nombre: string;
    apellido: string;
    rut: string;
    telefonocasa: number;
    celular: number;
    edad: number;
    correo: string;
    fechanacimiento: string;
}

export const Perfil: React.FC<Props> = ({
  nombre,
  apellido,
  rut,
  telefonocasa,
  celular,
  edad,
  correo,
  fechanacimiento
}) => {
  return (
    <div>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Apellido:</strong> {apellido}</p>
      <p><strong>Edad:</strong> {edad}</p>
      <p><strong>Rut:</strong> {rut}</p>
      <p><strong>Teléfono de Casa:</strong> {telefonocasa}</p>
      <p><strong>Celular:</strong> {celular}</p>
      <p><strong>Correo:</strong> {correo}</p>
      <p><strong>Fecha de Nacimiento:</strong> {fechanacimiento}</p>
      {edad > 18 && <p><strong>Eres mayor de edad</strong></p>}
    </div>
  );
};