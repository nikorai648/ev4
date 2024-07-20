// VisualizarRegistro.tsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { tematica } from "../Interfaces/interfaces";

const VisualizarRegistro: React.FC = () => {
  const [tematicas, setTematicas] = useState<tematica[]>([]);

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

  return (
    <div>
      <h2>Lista de Temáticas</h2>
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
