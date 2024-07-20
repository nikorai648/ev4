// src/Components/Modal.tsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface Props {
  show: boolean;
  handleClose: () => void;
  handleConfirm: () => void; // Función para manejar la confirmación
  message: string; // Mensaje a mostrar en el modal
  confirmButtonText?: string; // Texto del botón de confirmación
}

const ConfirmModal: React.FC<Props> = ({
  show,
  handleClose,
  handleConfirm,
  message,
  confirmButtonText = "Confirmar"
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          {confirmButtonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
