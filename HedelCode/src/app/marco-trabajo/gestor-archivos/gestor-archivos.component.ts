import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Directorio } from 'app/interfaces';
import { DirectoriosService } from 'app/services/directorios.service';
import { UsuariosService } from 'app/services/usuarios.service';

@Component({
  selector: 'app-gestor-archivos',
  templateUrl: './gestor-archivos.component.html',
  styleUrls: ['./gestor-archivos.component.css']
})
export class GestorArchivosComponent {

  constructor(private directorioServicio: DirectoriosService) { }

  idDirectorio = this.directorioServicio.getMyDirectorio();

  ngOnInit(): void {
    this.getDirectorio();
   }

  rango = 1;

  directorioRaiz:Directorio = 
  {
    contenido: []
  };

  getDirectorio() {
    this.directorioServicio.getAnDirectory(this.idDirectorio).subscribe(data => {
      console.log(data);
      this.directorioRaiz = data;
    })
  }


}
