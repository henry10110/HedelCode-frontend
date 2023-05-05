import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gestor-archivos',
  templateUrl: './gestor-archivos.component.html',
  styleUrls: ['./gestor-archivos.component.css']
})
export class GestorArchivosComponent {

  constructor() { }

  ngOnInit(): void {}

  @ViewChild('miElemento', {static: true}) miElementoRef!: ElementRef;

  cambiarLista() {
    const sublista = this.miElementoRef.nativeElement;
    if (sublista.style.display === 'none') {  
      sublista.style.display = 'block';
    } else {
      sublista.style.display = 'none';
    }
  }

}
