// src/Pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Alert } from 'react-bootstrap';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulación de autenticación (reemplaza esto con una llamada a tu API si es necesario)
      if (username === 'admin' && password === 'admin') {
        navigate('/menu');
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      setError('Error en la autenticación, inténtalo de nuevo más tarde.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Iniciar Sesión</h2>
      <Form onSubmit={handleLogin}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Usuario</Form.Label>
          <Form.Control
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Ingrese su usuario"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Contraseña</Form.Label>
          <Form.Control
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Ingrese su contraseña"
          />
        </Form.Group>
        <Button 
          type="submit" 
          variant="primary" 
          disabled={loading}
        >
          {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </Button>
      </Form>
    </div>
  );
};

export default Login;
