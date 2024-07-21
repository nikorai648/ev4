// src/utils/apiUtils.ts
import {  tematica} from "../Interfaces/interfaces";

// Función para enviar datos a una API
export const postTematica = async (url: string, data: tematica) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al enviar datos:', error);
    throw error;
  }
};

// Función para obtener datos de una API
// src/services/apiUtils.ts
import { Usuario } from '../Interfaces/interfaces';

export const fetchData = async (url: string): Promise<Usuario[]> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data as Usuario[];
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


// Función para actualizar datos en una API
export const putData = async (url: string, data: any): Promise<any> => {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

// Función para eliminar datos de una API
export const deleteData = async (url: string): Promise<void> => {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};
