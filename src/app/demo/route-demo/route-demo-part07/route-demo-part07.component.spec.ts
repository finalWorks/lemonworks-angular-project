import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDemoPart07Component } from './route-demo-part07.component';

describe('RouteDemoPart07Component', () => {
  let component: RouteDemoPart07Component;
  let fixture: ComponentFixture<RouteDemoPart07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDemoPart07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDemoPart07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
