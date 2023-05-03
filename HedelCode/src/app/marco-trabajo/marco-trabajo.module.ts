import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcoPrincipalComponent } from './marco-principal/marco-principal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MarcoPrincipalComponent
  ], //declaramos los componentes internos
  exports: [MarcoPrincipalComponent], //para exportar componentes, pero solo los necesarios
  imports: [
    CommonModule, //importar modulos necesarios como FormModule
    RouterModule
  ],
  providers: [] //para los servicios
})
export class MarcoTrabajoModule { }
