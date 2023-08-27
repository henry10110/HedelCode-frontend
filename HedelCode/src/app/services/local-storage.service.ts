import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setDirectorio( value: any): void {
    localStorage.setItem('directorio', JSON.stringify(value));
  }

  getDirectorio(): any {
    const item = localStorage.getItem('directorio');
    return item ? JSON.parse(item) : null;
  }

  setUsuario( value: any): void {
    localStorage.setItem('usuario', JSON.stringify(value));
  }

  getUsuario(): any {
    const item = localStorage.getItem('usuario');
    return item ? JSON.parse(item) : null;
  }

  removeDirectorio(): void {
    localStorage.removeItem('directorio');
  }

  removeUsuario(): void {
    localStorage.removeItem('usuario');
  }

  clear(): void {
    localStorage.clear();
  }
}
