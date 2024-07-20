import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { tematica } from "../Interfaces/interfaces";

const VisualizarRegistro: React.FC = () => {
  const [tematicas, setTematicas] = useState<tematica[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTematicas = async () => {
      try {
        const colRef = collection(db, "tematicas");
        const querySnapshot = await getDocs(colRef);
        let tematicasData: tematica[] = [];
        querySnapshot.forEach((doc) => {
          tematicasData.push({ id: doc.id, ...doc.data() } as tematica);
        });
        setTematicas(tematicasData);
      } catch (err) {
        setError('No se pudieron cargar los datos. Inténtalo de nuevo más tarde.');
        console.error('Error loading data: ', err);
      }
    };

    fetchTematicas();
  }, []);

  return (
    <div>
      <h2>Lista de Temáticas</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <ul>
        {tematicas.map((tematica) => (
          <li key={tematica.id}>
            <h3>{tematica.nombre}</h3>
            <p>{tematica.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisualizarRegistro;
