export interface Usuario {
  _id?: String,
  nombre?: String;
  correo?: String;
  contrasena?: String;
  idDirectorio?: String;
  archivosCompartidos?: Array<any>;
  descripcion?: String;
  imagenes?: Array<any>;
  plan?: Number
};

export interface Directorio {
  _id?: String;
  contenido?: Array<any>;
}



