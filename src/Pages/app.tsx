import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Menu from '../Pages/Menu';
import RegistroUsuarios from '../Pages/RegistrarUsuario';
import RegistroTematica from '../Pages/Registrotematica';
import VisualizarRegistro from '../Pages/VisualizarRegistro';
import EliminarRegistro from '../Pages/EliminarRegistro';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/register-user" element={<RegistroUsuarios />} />
        <Route path="/registro-tematica" element={<RegistroTematica show={false} handleClose={function (): void {
          throw new Error('Function not implemented.');
        } }/>} />
        <Route path="/view-records" element={<VisualizarRegistro />} />
        <Route path="/eliminar-registro" element={<EliminarRegistro />} />
      </Routes>
    </Router>
  );
};

export default App;
