import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gestor-archivos',
  templateUrl: './gestor-archivos.component.html',
  styleUrls: ['./gestor-archivos.component.css']
})
export class GestorArchivosComponent {

  rango = 1;

  directorioRaiz = [
    {
      nombre: 'carpeta 1',
      contenido: [
        {
          nombre: 'word.docx'
        },
        {
          nombre: 'excel.xls'
        },
        {
          nombre: 'carpeta 2',
          contenido: [
            {
              nombre: 'ultimafoto.jpg'
            },
            {
              nombre: 'carpeta 3',
              contenido: [
                {
                  nombre: 'esta si es la ultima.jpg'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      nombre: 'foto.jpg'
    },
    {
      nombre: 'imagen.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {}

}
