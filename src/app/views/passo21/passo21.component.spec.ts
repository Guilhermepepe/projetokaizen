import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passo21Component } from './passo21.component';

describe('Passo21Component', () => {
  let component: Passo21Component;
  let fixture: ComponentFixture<Passo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Passo21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Passo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
