import { Usuario } from "../Interfaces/interfaces";

// src/services/apiUtils.ts
export const fetchDataFromAPI = async (url: string): Promise<Usuario[]> => {
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
