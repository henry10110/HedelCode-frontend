import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalUsuarioComponent } from './principal-usuario/principal-usuario.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PrincipalUsuarioComponent
  ],
  exports: [PrincipalUsuarioComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: []
})
export class ControlUsuarioModule { }
