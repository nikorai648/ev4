import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase"; 
import { Usuario } from "../Interfaces/interfaces";

// Función para registrar un nuevo usuario
export const registrarUsuario = async (usuario: Usuario) => {
  try {
    await addDoc(collection(db, "usuarios"), usuario);
    console.log("Usuario registrado con éxito.");
  } catch (error) {
    console.error("Error registrando usuario: ", error);
  }
};

// Función para obtener la lista de usuarios
export const obtenerUsuarios = async (): Promise<Usuario[]> => {
  try {
    const colRef = collection(db, "usuarios");
    const querySnapshot = await getDocs(colRef);
    let usuarios: Usuario[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      let usuario: Usuario = {
        nombre: data.nombre,
        apellido: data.apellido,
        rut: data.rut,
        telefonocasa: data.telefonocasa,
        celular: data.celular,
        edad: data.edad,
        correo: data.correo,
        fechanacimiento: data.fechanacimiento,
      };
      usuarios.push(usuario);
    });
    return usuarios;
  } catch (error) {
    console.error("Error obteniendo usuarios: ", error);
    return [];
  }
};
