import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu: React.FC = () => {
  const navigate = useNavigate();

  const handleOptionClick = (option: string) => {
    navigate(`/${option}`);
  };

  return (
    <div className="container mt-5">
      <h2>Menú</h2>
      <ul>
        <li>
          <button onClick={() => handleOptionClick('registrar-usuario')} className="btn btn-primary">Registrar Nuevo Usuario</button>
        </li>
        <li>
          <button onClick={() => handleOptionClick('registro-tematica')} className="btn btn-primary">Registro Según Temática</button>
        </li>
        <li>
          <button onClick={() => handleOptionClick('visualizar')} className="btn btn-primary">Visualizar Lo Registrado</button>
        </li>
        <li>
          <button onClick={() => handleOptionClick('salir')} className="btn btn-primary">Salir</button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
