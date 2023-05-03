import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalUsuarioComponent } from './principal-usuario/principal-usuario.component';



@NgModule({
  declarations: [
    PrincipalUsuarioComponent
  ],
  exports: [PrincipalUsuarioComponent],
  imports: [
    CommonModule
  ],
  providers: []
})
export class ControlUsuarioModule { }
