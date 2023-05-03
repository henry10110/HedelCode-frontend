import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoSnippetComponent } from './marco-snippet.component';

describe('MarcoSnippetComponent', () => {
  let component: MarcoSnippetComponent;
  let fixture: ComponentFixture<MarcoSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcoSnippetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcoSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
