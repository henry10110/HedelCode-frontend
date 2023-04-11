import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [], //declaramos los componentes internos
  exports: [], //para exportar componentes, pero solo los necesarios
  imports: [
    CommonModule //importar modulos necesarios como FormModule
  ],
  providers: [] //para los servicios
})
export class MarcoTrabajoModule { }
