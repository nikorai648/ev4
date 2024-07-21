// src/Pages/VisualizarRegistro.tsx
import React, { useEffect, useState } from 'react';
import { tematica } from "../Interfaces/interfaces";
import { Button } from 'react-bootstrap';

const VisualizarRegistro: React.FC = () => {
  const [tematicas, setTematicas] = useState<tematica[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTematicas = () => {
      try {
        // Obtener los datos desde localStorage
        const storedTematicas = JSON.parse(localStorage.getItem('tematicas') || '[]') as tematica[];
        if (storedTematicas.length === 0) {
          setError('No hay datos disponibles.');
        } else {
          setTematicas(storedTematicas);
        }
      } catch (err) {
        setError('No se pudieron cargar los datos. Inténtalo de nuevo más tarde.');
        console.error('Error loading data: ', err);
      }
    };

    fetchTematicas();
  }, []);

  const handleRetry = () => {
    setError(null); // Clear error
    // Re-fetch data
    const fetchTematicas = () => {
      try {
        const storedTematicas = JSON.parse(localStorage.getItem('tematicas') || '[]') as tematica[];
        if (storedTematicas.length === 0) {
          setError('No hay datos disponibles.');
        } else {
          setTematicas(storedTematicas);
        }
      } catch (err) {
        setError('No se pudieron cargar los datos. Inténtalo de nuevo más tarde.');
        console.error('Error loading data: ', err);
      }
    };

    fetchTematicas();
  };

  return (
    <div className="container mt-5">
      <h2>Lista de Temáticas</h2>
      {error ? (
        <div className="alert alert-danger">
          {error}
          <Button variant="secondary" onClick={handleRetry} className="mt-2">Reintentar</Button>
        </div>
      ) : (
        <ul className="list-group">
          {tematicas.map((tematica) => (
            <li key={tematica.id} className="list-group-item">
              <h3>{tematica.nombre}</h3>
              <p>{tematica.descripcion}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VisualizarRegistro;
