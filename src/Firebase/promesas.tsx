import { Usuario } from "../Interfaces/interfaces";

// Funciónque registra un nuevo usuario en localStorage
export const registrarUsuario = (usuario: Usuario) => {
  try {
    // Obtiene la lista actual de usuarios desde localStorage o inicializa un array vacío
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]') as Usuario[];
    
    // Agrega el nuevo usuario al array
    usuarios.push(usuario);
    
    // Guarda el array actualizado en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    console.log("Usuario registrado con éxito.");
  } catch (error) {
    console.error("Error registrando usuario: ", error);
  }
};

// Función que sirve para obtener la lista de usuarios desde localStorage
export const obtenerUsuarios = async (): Promise<Usuario[]> => {
  try {
    // Obtiene la lista de usuarios desde localStorage o inicializar un array vacío
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]') as Usuario[];
    return usuarios;
  } catch (error) {
    console.error("Error obteniendo usuarios: ", error);
    return [];
  }
};
