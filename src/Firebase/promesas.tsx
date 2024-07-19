import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase"; 
import { Usuario } from "../Interfaces/interfaces";

export const registrarUsuario = async (usuario: Usuario) => {
  await addDoc(collection(db, "usuarios"), usuario);
};

export const obtenerUsuarios = async () => {
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
};
