import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePlanesComponent } from './detalle-planes/detalle-planes.component';



@NgModule({
  declarations: [
    DetallePlanesComponent
  ],
  exports: [DetallePlanesComponent],
  imports: [
    CommonModule
  ],
  providers: []
})
export class PlanesModule { }
