// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Menu from './Pages/Menu';
import RegistroUsuarios from './Pages/RegistroUsuarios';
import RegistroTematica from './Pages/RegistroTematica';
import ViewRecords from './Pages/ViewRecords';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/register-user" element={<RegistroUsuarios />} />
        <Route path="/registro-tematica" element={<RegistroTematica />} />
        <Route path="/view-records" element={<ViewRecords />} />
      </Routes>
    </Router>
  );
};

export default App;
