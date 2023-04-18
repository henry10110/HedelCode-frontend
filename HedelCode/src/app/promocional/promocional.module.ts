import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPromComponent } from './pagina-prom/pagina-prom.component';



@NgModule({
  declarations: [
    PaginaPromComponent
  ],
  exports: [PaginaPromComponent],
  imports: [
    CommonModule
  ],
  providers: []
})
export class PromocionalModule { }
