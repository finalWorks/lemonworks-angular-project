import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDemoPart03Component } from './route-demo-part03.component';

describe('RouteDemoPart03Component', () => {
  let component: RouteDemoPart03Component;
  let fixture: ComponentFixture<RouteDemoPart03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDemoPart03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDemoPart03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
