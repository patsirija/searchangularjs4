import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jumboton2Component } from './jumboton2.component';

describe('Jumboton2Component', () => {
  let component: Jumboton2Component;
  let fixture: ComponentFixture<Jumboton2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jumboton2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jumboton2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
