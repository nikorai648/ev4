import { Usuario, tematica } from '../Interfaces/interfaces';

// Crear un nuevo usuario
export const createUser = (user: Usuario) => {
  const users = JSON.parse(localStorage.getItem('usuarios') || '[]') as Usuario[];
  users.push(user);
  localStorage.setItem('usuarios', JSON.stringify(users));
};

// Obtener todos los usuarios
export const getUsers = (): Usuario[] => {
  return JSON.parse(localStorage.getItem('usuarios') || '[]') as Usuario[];
};

// Crear una nueva temática
export const createTematica = (tema: tematica) => {
  const tematicas = JSON.parse(localStorage.getItem('tematicas') || '[]') as tematica[];
  tematicas.push(tema);
  localStorage.setItem('tematicas', JSON.stringify(tematicas));
};

// Obtener todas las temáticas
export const getTematicas = (): tematica[] => {
  return JSON.parse(localStorage.getItem('tematicas') || '[]') as tematica[];
};
