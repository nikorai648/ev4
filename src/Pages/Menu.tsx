// src/Pages/Menu.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <div className="container mt-5">
      <h2>Menú Principal</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/register-user">Registrar nuevo usuario</Link>
        </li>
        <li className="list-group-item">
          <Link to="/registro-tematica">Registro según temática</Link>
        </li>
        <li className="list-group-item">
          <Link to="/view-records">Visualizar lo registrado</Link>
        </li>
        <li className="list-group-item">
            <Link to="/eliminate-records">Eliminar lo registrado</Link>
        </li>
        <li className="list-group-item">
          <Link to="/logout">Salir</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
