import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePlanesComponent } from './detalle-planes/detalle-planes.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DetallePlanesComponent
  ],
  exports: [DetallePlanesComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: []
})
export class PlanesModule { }
