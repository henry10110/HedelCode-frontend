import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePlanesComponent } from './detalle-planes.component';

describe('DetallePlanesComponent', () => {
  let component: DetallePlanesComponent;
  let fixture: ComponentFixture<DetallePlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
