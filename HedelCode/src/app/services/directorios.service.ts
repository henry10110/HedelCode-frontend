import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Directorio } from 'app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DirectoriosService {

  url = 'http://localhost:8888/directorios';

  constructor(private http:HttpClient) { }

  postCrearDirectorio( req_body: any):Observable<Directorio> {//el body puede ser lo que sea

    return this.http.post(this.url+'/', req_body);
  };

  deleteAnDirectory( _id: String):Observable<Directorio> {

    return this.http.delete(this.url+`/${_id}`);
  };

  updateAnDirectory( _id: String, req_body: any):Observable<Directorio> {

    return this.http.put(this.url+`/${_id}`, req_body);
  };

  getAnDirectory( _id: String):Observable<Directorio> {

    return this.http.get(this.url+`/${_id}`);
  };
}
