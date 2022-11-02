import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chevrolet2020Component } from './chevrolet2020.component';

describe('Chevrolet2020Component', () => {
  let component: Chevrolet2020Component;
  let fixture: ComponentFixture<Chevrolet2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chevrolet2020Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chevrolet2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
