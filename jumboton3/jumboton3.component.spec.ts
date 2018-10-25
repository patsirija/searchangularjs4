import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jumboton3Component } from './jumboton3.component';

describe('Jumboton3Component', () => {
  let component: Jumboton3Component;
  let fixture: ComponentFixture<Jumboton3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jumboton3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jumboton3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
