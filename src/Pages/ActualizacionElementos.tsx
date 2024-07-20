import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import { tematica } from '../Interfaces/interfaces';
import { useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const ActualizarElementos: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtén el id del parámetro de la URL
  const [tematicaData, setTematicaData] = useState<tematica | null>(null);

  useEffect(() => {
    const fetchTematica = async () => {
      if (id) {
        const docRef = doc(db, 'tematicas', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setTematicaData(docSnap.data() as tematica);
        } else {
          console.log('No such document!');
        }
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id && tematicaData) {
      try {
        const docRef = doc(db, 'tematicas', id);
        // Asegúrate de que los datos están en el formato correcto
        const updatedData = {
          nombre: tematicaData.nombre,
          descripcion: tematicaData.descripcion,
        };
        await updateDoc(docRef, updatedData);
        alert('Temática actualizada con éxito');
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
