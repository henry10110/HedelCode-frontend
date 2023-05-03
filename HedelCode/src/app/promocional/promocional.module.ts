import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPromComponent } from './pagina-prom/pagina-prom.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PaginaPromComponent
  ],
  exports: [PaginaPromComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: []
})
export class PromocionalModule { }
