import { Component } from '@angular/core';

@Component({
  selector: 'app-marco-principal',
  templateUrl: './marco-principal.component.html',
  styleUrls: ['./marco-principal.component.css']
})
export class MarcoPrincipalComponent {

  codigoHTML: string = '';
  codigoCSS: string = '';
  codigoJS: string = '';
  contenido = `<h1>que tal</h1>`;

  compilar(){
    this.contenido = `
    <html>
      <head>
        <style>${this.codigoCSS}</style>
      </head>
      <body>
        ${this.codigoHTML}
        <script>${this.codigoJS}</script>
      </body>
    </html>
  `;
  }

}
