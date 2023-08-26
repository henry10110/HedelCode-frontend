export interface Usuario {
  _id?: String,
  nombre?: String;
  correo?: String;
  contrasena?: String;
  idDirectorio?: String;
  archivosCompartidos?: [];
  descripcion?: String;
  imagenes?: [];
  plan?: Number
};

export interface Directorio {
  _id?: String;
  contenido?: []
}



