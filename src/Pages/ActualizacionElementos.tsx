import React, { useEffect, useState } from 'react';
import { tematica } from '../Interfaces/interfaces';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const ActualizarElementos: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tematicaData, setTematicaData] = useState<tematica | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTematica = () => {
      const tematicas = localStorage.getItem('tematicas');
      if (tematicas) {
        const parsedTematicas: tematica[] = JSON.parse(tematicas);
        const foundTematica = parsedTematicas.find(t => t.id === id);
        setTematicaData(foundTematica || null);
      }
    };

    fetchTematica();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (tematicaData) {
      const { name, value } = e.target;
      setTematicaData({
        ...tematicaData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id && tematicaData) {
      try {
        let tematicas = localStorage.getItem('tematicas');
        if (tematicas) {
          const parsedTematicas: tematica[] = JSON.parse(tematicas);
          const updatedTematicas = parsedTematicas.map(t =>
            t.id === id ? tematicaData : t
          );
          localStorage.setItem('tematicas', JSON.stringify(updatedTematicas));
          alert('Temática actualizada con éxito');
          navigate('/visualizar-registro'); // Redirige después de actualizar
        }
      } catch (error) {
        console.error('Error updating document: ', error);
      }
    }
  };

  return (
    <div>
      <h2>Actualizar Temática</h2>
      {tematicaData ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={tematicaData.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              name="descripcion"
              value={tematicaData.descripcion}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Actualizar
          </Button>
        </Form>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ActualizarElementos;
