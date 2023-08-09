import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcoPrincipalComponent } from './marco-principal/marco-principal.component';
import { RouterModule } from '@angular/router';
import { GestorArchivosComponent } from './gestor-archivos/gestor-archivos.component';
import { FormsModule } from '@angular/forms';
import { GestorCodeComponent } from './gestor-code/gestor-code.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';



@NgModule({
  declarations: [
    MarcoPrincipalComponent,
    GestorArchivosComponent,
    GestorCodeComponent
  ], //declaramos los componentes internos
  exports: [MarcoPrincipalComponent], //para exportar componentes, pero solo los necesarios
  imports: [
    CommonModule, //importar modulos necesarios como FormModule
    RouterModule,
    FormsModule,
    HighlightModule
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      fullLibraryLoader: () => import('highlight.js'),
      //lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
    },
  },] //para los servicios
})
export class MarcoTrabajoModule { }
