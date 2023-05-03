import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';
import { RouterModule } from '@angular/router';



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
    CommonModule,
    RouterModule
  ],
  providers: []
})
export class RegistroSesionModule { }
