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

export const Perfil: React.FC<Props> = ({ nombre, apellido, edad,rut,telefonocasa,celular,correo,fechanacimiento }) => {
    return (
      <div>
        <p>Nombre: {nombre}</p>
        <p>Apellido: {apellido}</p>
        <p>Edad: {edad}</p>
        <p>Rut: {rut}</p>
        <p>Telefono de Casa: {telefonocasa}</p>
        <p>Celular: {celular}</p>
        <p>Correo: {correo}</p>
        <p>Fecha de Nacimiento: {fechanacimiento}</p>
        {edad > 18 && <p>Eres mayor de edad</p>}
      </div>
    );
  };