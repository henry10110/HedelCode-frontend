import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = 'http://localhost:8888/usuarios';

  constructor(private http:HttpClient) { }

  getAllUsers() {

    return this.http.get(this.url+'/');
  };

  postRegistrarUsuario( req_body: any) {

    return this.http.post(this.url+'/', req_body);
  };

  postConfirmarUsuario( req_body: any) {

    return this.http.post(this.url+'/login', req_body);
  };

  getAnUser( _id: String) {

    return this.http.get(this.url+`/${_id}`);
  };

  updateAnUser( _id: String, req_body: any) {

    return this.http.put(this.url+`/${_id}`, req_body);
  };

  deleteAnUser( _id: String) {

    return this.http.delete(this.url+`/${_id}`);
  };
}
