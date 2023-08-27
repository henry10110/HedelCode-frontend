import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Directorio } from 'app/interfaces';
import { DirectoriosService } from 'app/services/directorios.service';
import { LocalStorageService } from 'app/services/local-storage.service';
import { UsuariosService } from 'app/services/usuarios.service';

@Component({
  selector: 'app-gestor-archivos',
  templateUrl: './gestor-archivos.component.html',
  styleUrls: ['./gestor-archivos.component.css']
})
export class GestorArchivosComponent {

  constructor(private directorioServicio: DirectoriosService,
              private lSService: LocalStorageService
    ) { }

  idDirectorio = this.directorioServicio.getMyDirectorio();

  ngOnInit(): void {
    this.getDirectorio();
    this.crearRegistroForm();
   }


  carpetaForm!: FormGroup;
  nombreItem: String = '';

  rango = 1;

  directorioRaiz:Directorio = 
  {
    contenido: []
  };

  crearRegistroForm(): void {
    this.carpetaForm = new FormGroup({
      nombre: new FormControl("", Validators.required),
    })
  }

  getDirectorio() {
    this.lSService.getDirectorio().subscribe((data: Directorio) => {
      console.log(data);
      this.directorioRaiz = data;
    })
  }

  contextMenuOn(event: MouseEvent) {

    const elemento = document.getElementById('contextMenu');
    if(elemento != null) elemento.style.display = "block";
    event.preventDefault();
  };

  contextMenuOff() {
    const elemento = document.getElementById('contextMenu');
    if(elemento != null) elemento.style.display = "none";
  }

  crearCarpeta() {
    const elemento = document.getElementById('newCarpeta');
    if(elemento != null) elemento.style.display = "block";
  };

  crearDirectorio() {
    var formulario = this.carpetaForm.value; 

    let itemTemp = {
      nombre: formulario.nombre,
      codigo: [],
      contenido: []
    };

    this.directorioRaiz.contenido?.push(itemTemp);
    this.carpetaForm.reset();
    this.cancelarDirectorio();
  };

  cancelarDirectorio() {
    const elemento = document.getElementById('newCarpeta');
    if(elemento != null) elemento.style.display = "none";
  };

  crearArchivo() {};

}
