// Registrotematica.tsx
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { tematica } from "../Interfaces/interfaces";

interface Props {
  show: boolean;
  handleClose: () => void;
}

const RegistroTematica: React.FC<Props> = ({ show, handleClose }) => {
  const [tematica, setTematica] = useState<tematica>({
    nombre: '',
    descripcion: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTematica({
      ...tematica,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "tematicas"), tematica);
      handleClose();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
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
              value={tematica.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              name="descripcion"
              value={tematica.descripcion}
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
