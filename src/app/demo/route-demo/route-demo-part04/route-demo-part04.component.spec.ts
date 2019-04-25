import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDemoPart04Component } from './route-demo-part04.component';

describe('RouteDemoPart04Component', () => {
  let component: RouteDemoPart04Component;
  let fixture: ComponentFixture<RouteDemoPart04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDemoPart04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDemoPart04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
