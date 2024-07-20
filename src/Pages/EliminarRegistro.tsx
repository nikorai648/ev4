// src/Pages/EliminarRegistro.tsx
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ConfirmModal from '../Pages/Modal'; // Usar el modal para confirmar eliminar o no eliminar
import { tematica } from "../Interfaces/interfaces";

const EliminarRegistro: React.FC = () => {
  const [tematicas, setTematicas] = useState<tematica[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string>('');

  useEffect(() => {
    const fetchTematicas = () => {
      try {
        // Obtiene los datos desde localStorage
        const storedTematicas = JSON.parse(localStorage.getItem('tematicas') || '[]') as tematica[];
        setTematicas(storedTematicas);
      } catch (err) {
        console.error('Error loading data: ', err);
      }
    };

    fetchTematicas();
  }, []);

  const handleDelete = () => {
    if (selectedId) {
      try {
        // Filtra las temáticas para eliminar la seleccionada
        const updatedTematicas = tematicas.filter((tematica) => tematica.id !== selectedId);
        setTematicas(updatedTematicas);

        // Guarda los datos actualizados en localStorage
        localStorage.setItem('tematicas', JSON.stringify(updatedTematicas));
        setShowModal(false);
      } catch (error) {
        console.error("Error deleting data: ", error);
      }
    }
  };

  const handleShowModal = (id: string, name: string) => {
    setSelectedId(id);
    setSelectedName(name);
    setShowModal(true);
  };

  return (
    <div>
      <h2>Eliminar Temáticas</h2>
      <ul>
        {tematicas.map((tematica) => (
          <li key={tematica.id}>
            <h3>{tematica.nombre}</h3>
            <p>{tematica.descripcion}</p>
            <Button variant="danger" onClick={() => handleShowModal(tematica.id, tematica.nombre)}>
              Eliminar
            </Button>
          </li>
        ))}
      </ul>
      <ConfirmModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirm={handleDelete}
        message={`¿Estás seguro de que deseas eliminar "${selectedName}"? Esta acción no se puede deshacer.`}
        confirmButtonText="Eliminar"
      />
    </div>
  );
};

export default EliminarRegistro;
