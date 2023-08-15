import { Component } from '@angular/core';

@Component({
  selector: 'app-marco-principal',
  templateUrl: './marco-principal.component.html',
  styleUrls: ['./marco-principal.component.css']
})
export class MarcoPrincipalComponent {

  codigoHTML: string = `<div id="hola"></div>`;
  codigoCSS: string = `#hola {background-color: #888;}`;
  codigoJS: string = `document.getElementById('hola').innerHTML = '<p>holaaa, it works!!</p>';`;
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
  
    const iframe = document.getElementById('iframeResult');
  
    if (iframe) {
      (iframe as HTMLIFrameElement).srcdoc = this.contenido;
    }
  }

}
