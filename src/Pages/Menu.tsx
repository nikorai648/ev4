// src/Pages/Menu.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ListGroup } from 'react-bootstrap';

const Menu: React.FC = () => {
  const navigate = useNavigate();

  const handleOptionClick = (option: string) => {
    if (option === 'salir') {
      const confirmExit = window.confirm('¿Estás seguro de que quieres salir?');
      if (confirmExit) {
        // Manejar el cierre de sesión o redirección aquí
        navigate('/login'); // Redirige a la página de inicio de sesión o a la página deseada
      }
    } else {
      navigate(`/${option}`);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Menú</h2>
      <ListGroup>
        <ListGroup.Item>
          <Button 
            onClick={() => handleOptionClick('registrar-usuario')} 
            variant="primary" 
            className="w-100" // Utiliza clase de Bootstrap para ancho completo
          >
            Registrar Nuevo Usuario
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button 
            onClick={() => handleOptionClick('registro-tematica')} 
            variant="primary" 
            className="w-100" // Utiliza clase de Bootstrap para ancho completo
          >
            Registro Según Temática
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button 
            onClick={() => handleOptionClick('visualizar')} 
            variant="primary" 
            className="w-100" // Utiliza clase de Bootstrap para ancho completo
          >
            Visualizar Lo Registrado
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button 
            onClick={() => handleOptionClick('salir')} 
            variant="danger" 
            className="w-100" // Utiliza clase de Bootstrap para ancho completo
          >
            Salir
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Menu;
