// src/Components/Modal.tsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface Props {
  show: boolean;
  handleClose: () => void;
}

const RegistroTematicaModal: React.FC<Props> = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registrar Nueva Temática</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Aquí va el contenido del formulario de registro de temática */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RegistroTematicaModal;
