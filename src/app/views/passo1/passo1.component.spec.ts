import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passo1Component } from './passo1.component';

describe('Passo1Component', () => {
  let component: Passo1Component;
  let fixture: ComponentFixture<Passo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Passo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Passo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
