// src/Pages/About.tsx
import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api'; // Ajusta la ruta si es necesario

const About: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData('https://jsonplaceholder.typicode.com/posts/1'); // URL de ejemplo
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    loadData();
  }, []);

  return (
    <div className="container mt-5">
      <h2>About Us</h2>
      {error && <p>{error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <p>Esta es la página About.</p>
    </div>
  );
};

export default About;
