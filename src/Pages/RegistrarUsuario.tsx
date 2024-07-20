// src/Pages/RegistrarUsuario.tsx
import React, { useState } from 'react';
import { registrarUsuario } from '../Firebase/promesas';
import { Usuario } from "../Interfaces/interfaces";

const RegistrarUsuario: React.FC = () => {
  const [formData, setFormData] = useState<Usuario>({
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
    setFormData((prevData) => ({
      ...prevData,
      [id]: id === 'telefonocasa' || id === 'celular' || id === 'edad' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registrarUsuario(formData);
      alert('Usuario registrado con éxito');
      // Limpiar el formulario después de registro exitoso
      setFormData({
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
      console.error('Error registrando usuario: ', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Registrar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rut" className="form-label">RUT</label>
          <input
            type="text"
            className="form-control"
            id="rut"
            value={formData.rut}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefonocasa" className="form-label">Teléfono de Casa</label>
          <input
            type="number"
            className="form-control"
            id="telefonocasa"
            value={formData.telefonocasa}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="celular" className="form-label">Celular</label>
          <input
            type="number"
            className="form-control"
            id="celular"
            value={formData.celular}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="edad" className="form-label">Edad</label>
          <input
            type="number"
            className="form-control"
            id="edad"
            value={formData.edad}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo</label>
          <input
            type="email"
            className="form-control"
            id="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fechanacimiento" className="form-label">Fecha de Nacimiento</label>
          <input
            type="date"
            className="form-control"
            id="fechanacimiento"
            value={formData.fechanacimiento}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
};

export default RegistrarUsuario;
