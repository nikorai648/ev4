// src/Pages/Modal.tsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ConfirmModalProps {
  show: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  message: string;
  confirmButtonText: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ show, handleClose, handleConfirm, message, confirmButtonText }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmación</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleConfirm}>
          {confirmButtonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
