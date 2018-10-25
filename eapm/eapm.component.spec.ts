import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EapmComponent } from './eapm.component';

describe('EapmComponent', () => {
  let component: EapmComponent;
  let fixture: ComponentFixture<EapmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EapmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EapmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
