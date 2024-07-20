// EliminarRegistro.tsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { Tematica } from "../Interfaces/interfaces";
import { Button } from 'react-bootstrap';

const EliminarRegistro: React.FC = () => {
  const [tematicas, setTematicas] = useState<Tematica[]>([]);

  useEffect(() => {
    const fetchTematicas = async () => {
      const colRef = collection(db, "tematicas");
      const querySnapshot = await getDocs(colRef);
      let tematicasData: Tematica[] = [];
      querySnapshot.forEach((doc) => {
        tematicasData.push({ id: doc.id, ...doc.data() } as Tematica);
      });
      setTematicas(tematicasData);
    };

    fetchTematicas();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "tematicas", id));
      setTematicas(tematicas.filter((tematica) => tematica.id !== id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div>
      <h2>Eliminar Temáticas</h2>
      <ul>
        {tematicas.map((tematica) => (
          <li key={tematica.id}>
            <h3>{tematica.nombre}</h3>
            <p>{tematica.descripcion}</p>
            <Button variant="danger" onClick={() => handleDelete(tematica.id)}>
              Eliminar
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EliminarRegistro;
