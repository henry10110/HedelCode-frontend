import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPromComponent } from './pagina-prom.component';

describe('PaginaPromComponent', () => {
  let component: PaginaPromComponent;
  let fixture: ComponentFixture<PaginaPromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaPromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
