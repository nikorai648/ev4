import React, { useState } from 'react';
import { Usuario } from '../Interfaces/interfaces';

const RegistroUsuarios: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    nombre: '',
    apellido: '',
    rut: '',
    telefonocasa: 0,
    celular: 0,
    edad: 0,
    correo: '',
    fechanacimiento: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUsuario({ ...usuario, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registrarUsuario(usuario);
      alert('Usuario registrado con éxito');
      setUsuario({
        nombre: '',
        apellido: '',
        rut: '',
        telefonocasa: 0,
        celular: 0,
        edad: 0,
        correo: '',
        fechanacimiento: '',
      });
    } catch (error) {
      alert('Error al registrar el usuario');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Registrar Nuevo Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="nombre" value={usuario.nombre} onChange={handleChange} placeholder="Nombre" required />
        <input type="text" id="apellido" value={usuario.apellido} onChange={handleChange} placeholder="Apellido" required />
        <input type="text" id="rut" value={usuario.rut} onChange={handleChange} placeholder="RUT" required />
        <input type="number" id="telefonocasa" value={usuario.telefonocasa} onChange={handleChange} placeholder="Teléfono de Casa" required />
        <input type="number" id="celular" value={usuario.celular} onChange={handleChange} placeholder="Celular" required />
        <input type="number" id="edad" value={usuario.edad} onChange={handleChange} placeholder="Edad" required />
        <input type="email" id="correo" value={usuario.correo} onChange={handleChange} placeholder="Correo" required />
        <input type="date" id="fechanacimiento" value={usuario.fechanacimiento} onChange={handleChange} placeholder="Fecha de Nacimiento" required />
        <button type="submit" className="btn btn-primary mt-3">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroUsuarios;
