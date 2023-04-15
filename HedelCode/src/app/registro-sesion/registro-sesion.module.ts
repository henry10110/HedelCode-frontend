import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';



@NgModule({
  declarations: [
    RegistroComponent,
    SesionComponent
  ],
  exports: [
    RegistroComponent,
    SesionComponent
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class RegistroSesionModule { }
