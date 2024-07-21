import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrarUsuario from '../Pages/RegistrarUsuario';
import VisualizarRegistros from '../Pages/VisualizarRegistro';
import ActualizarElementos from '../Pages/ActualizacionElementos';
import EliminarRegistro from '../Pages/EliminarRegistro';
import Login from '../Pages/Login';
import Menu from '../Pages/Menu';
import RegistroTematica from '../Pages/Registrotematica'; 
import { Button } from 'react-bootstrap'; 

const App: React.FC = () => {
  const [showRegistroTematica, setShowRegistroTematica] = useState(false);

  const handleShowRegistroTematica = () => setShowRegistroTematica(true);
  const handleCloseRegistroTematica = () => setShowRegistroTematica(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/registrar-usuario" element={<RegistrarUsuario />} />
        <Route path="/registro-tematica" element={<RegistroTematica show={showRegistroTematica} handleClose={handleCloseRegistroTematica} />} />
        <Route path="/visualizar-registros" element={<VisualizarRegistros />} />
        <Route path="/actualizar-elementos/:id" element={<ActualizarElementos />} />
        <Route path="/eliminar-registro" element={<EliminarRegistro />} />
      </Routes>
      {/* Agrega el boton para abrir el modal, si es necesario para que se active*/}
      <Button onClick={handleShowRegistroTematica}>Abrir Modal</Button>
    </Router>
  );
};

export default App;
