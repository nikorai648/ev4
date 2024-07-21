// src/Pages/RegistroTematica.tsx
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { tematica } from "../Interfaces/interfaces";

interface Props {
  show: boolean;
  handleClose: () => void;
}

const RegistroTematica: React.FC<Props> = ({ show, handleClose }) => {
  const [tematicaData, setTematicaData] = useState<tematica>({
    nombre: '',
    descripcion: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTematicaData({
      ...tematicaData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Obtiene el listado actual de las tematicas desde localStorage
    const tematicas = JSON.parse(localStorage.getItem('tematicas') || '[]') as tematica[];

    // Agrega la nueva temática
    tematicas.push(tematicaData);

    // Guarda el listado actualizado  en localStorage
    localStorage.setItem('tematicas', JSON.stringify(tematicas));

    // Limpia el formulario y cierra el modal
    setTematicaData({ nombre: '', descripcion: '' });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registrar Nueva Temática</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={tematicaData.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              name="descripcion"
              value={tematicaData.descripcion}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Registrar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RegistroTematica;
