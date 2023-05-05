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
  contenido = '';

  compilar() {
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
  
    // Encuentra el iframe en el DOM
    const iframe = document.getElementById('iframeResult');
  
    // Establece el atributo srcdoc del iframe con el contenido generado
    if (iframe) {
      (iframe as HTMLIFrameElement).srcdoc = this.contenido;
    }
  }

}
