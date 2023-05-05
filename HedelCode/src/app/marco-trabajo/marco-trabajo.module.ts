import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcoPrincipalComponent } from './marco-principal/marco-principal.component';
import { RouterModule } from '@angular/router';
import { GestorArchivosComponent } from './gestor-archivos/gestor-archivos.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MarcoPrincipalComponent,
    GestorArchivosComponent
  ], //declaramos los componentes internos
  exports: [MarcoPrincipalComponent], //para exportar componentes, pero solo los necesarios
  imports: [
    CommonModule, //importar modulos necesarios como FormModule
    RouterModule,
    FormsModule
  ],
  providers: [] //para los servicios
})
export class MarcoTrabajoModule { }
