import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item: any;
  @Input() rango: any;
  expanded = false;

  ngOnInit(){
    this.bajaRango();
  }
  
  bajaRango() {
    this.rango += 15;
  }

  estado() {
    if (this.item.contenido) {
      this.expanded = !this.expanded;
    }
  }
}
