import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorCodeComponent } from './gestor-code.component';

describe('GestorCodeComponent', () => {
  let component: GestorCodeComponent;
  let fixture: ComponentFixture<GestorCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
