import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalUsuarioComponent } from './principal-usuario.component';

describe('PrincipalUsuarioComponent', () => {
  let component: PrincipalUsuarioComponent;
  let fixture: ComponentFixture<PrincipalUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
