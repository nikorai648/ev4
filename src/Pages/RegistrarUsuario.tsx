// src/Pages/RegistrarUsuario.tsx
import React, { useState } from 'react';
import { Usuario } from "../Interfaces/interfaces";
import { Button, Form } from 'react-bootstrap';

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
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: id === 'telefonocasa' || id === 'celular' || id === 'edad' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Obtener el listado actual de usuarios desde localStorage
      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]') as Usuario[];

      // Agregar el nuevo usuario
      usuarios.push(formData);

      // Guardar el listado actualizado en localStorage
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

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

      alert('Usuario registrado con éxito');
    } catch (error) {
      setError('No se pudo registrar el usuario. Inténtalo de nuevo más tarde.');
      console.error('Error registrando usuario: ', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Registrar Usuario</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="nombre">Nombre</Form.Label>
          <Form.Control
            type="text"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="apellido">Apellido</Form.Label>
          <Form.Control
            type="text"
            id="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="rut">RUT</Form.Label>
          <Form.Control
            type="text"
            id="rut"
            value={formData.rut}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="telefonocasa">Teléfono de Casa</Form.Label>
          <Form.Control
            type="number"
            id="telefonocasa"
            value={formData.telefonocasa}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="celular">Celular</Form.Label>
          <Form.Control
            type="number"
            id="celular"
            value={formData.celular}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="edad">Edad</Form.Label>
          <Form.Control
            type="number"
            id="edad"
            value={formData.edad}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="correo">Correo</Form.Label>
          <Form.Control
            type="email"
            id="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="fechanacimiento">Fecha de Nacimiento</Form.Label>
          <Form.Control
            type="date"
            id="fechanacimiento"
            value={formData.fechanacimiento}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Registrar
        </Button>
      </Form>
    </div>
  );
};

export default RegistrarUsuario;
