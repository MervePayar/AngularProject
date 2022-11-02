import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Audi2020Component } from './audi2020.component';

describe('Audi2020Component', () => {
  let component: Audi2020Component;
  let fixture: ComponentFixture<Audi2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Audi2020Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Audi2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
