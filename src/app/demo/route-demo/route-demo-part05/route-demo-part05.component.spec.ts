import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDemoPart05Component } from './route-demo-part05.component';

describe('RouteDemoPart05Component', () => {
  let component: RouteDemoPart05Component;
  let fixture: ComponentFixture<RouteDemoPart05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDemoPart05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDemoPart05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
