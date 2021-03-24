import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passo4Component } from './passo4.component';

describe('Passo4Component', () => {
  let component: Passo4Component;
  let fixture: ComponentFixture<Passo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Passo4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Passo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
