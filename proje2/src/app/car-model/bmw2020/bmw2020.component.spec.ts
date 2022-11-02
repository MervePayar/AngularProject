import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bmw2020Component } from './bmw2020.component';

describe('Bmw2020Component', () => {
  let component: Bmw2020Component;
  let fixture: ComponentFixture<Bmw2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bmw2020Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bmw2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
