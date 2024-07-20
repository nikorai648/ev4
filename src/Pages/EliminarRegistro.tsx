// src/Pages/EliminarRegistro.tsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { tematica } from "../Interfaces/interfaces";
import { Button } from 'react-bootstrap';
import ConfirmModal from '../Pages/Modal'; // Usar el modal actualizado

const EliminarRegistro: React.FC = () => {
  const [tematicas, setTematicas] = useState<tematica[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string>('');

  useEffect(() => {
    const fetchTematicas = async () => {
      const colRef = collection(db, "tematicas");
      const querySnapshot = await getDocs(colRef);
      let tematicasData: tematica[] = [];
      querySnapshot.forEach((doc) => {
        tematicasData.push({ id: doc.id, ...doc.data() } as tematica);
      });
      setTematicas(tematicasData);
    };

    fetchTematicas();
  }, []);

  const handleDelete = async () => {
    if (selectedId) {
      try {
        await deleteDoc(doc(db, "tematicas", selectedId));
        setTematicas(tematicas.filter((tematica) => tematica.id !== selectedId));
        setShowModal(false);
      } catch (error) {
        console.error("Error deleting document: ", error);
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
