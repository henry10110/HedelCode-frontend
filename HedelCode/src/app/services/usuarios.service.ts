import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = 'http://localhost:8888/usuarios';

  idUsuario:String = '';

  constructor(private http:HttpClient) { }

  setIdUsuario(id: String) {
    this.idUsuario = id;
  };

  getIdUsuario() {
    return this.idUsuario;
  }

  getAllUsers():Observable<Usuario> {

    return this.http.get(this.url+'/');
  };

  postRegistrarUsuario( req_body: Usuario):Observable<Usuario> {

    return this.http.post(this.url+'/', req_body);
  };

  postConfirmarUsuario( req_body: any):Observable<Usuario> {

    return this.http.post(this.url+'/login', req_body);
  };

  getAnUser( _id: String):Observable<Usuario> {

    return this.http.get(this.url+`/${_id}`);
  };

  updateAnUser( _id: String, req_body: any):Observable<Usuario> {

    return this.http.put(this.url+`/${_id}`, req_body);
  };

  deleteAnUser( _id: String):Observable<Usuario> {

    return this.http.delete(this.url+`/${_id}`);
  };
}
