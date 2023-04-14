import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoPrincipalComponent } from './marco-principal.component';

describe('MarcoPrincipalComponent', () => {
  let component: MarcoPrincipalComponent;
  let fixture: ComponentFixture<MarcoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcoPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
