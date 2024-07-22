// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS
import './index.css'; // Importa el CSS global

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('No se encontró el elemento con id "root" en el DOM.');
}
