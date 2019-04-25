import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDemoPart06Component } from './route-demo-part06.component';

describe('RouteDemoPart06Component', () => {
  let component: RouteDemoPart06Component;
  let fixture: ComponentFixture<RouteDemoPart06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDemoPart06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDemoPart06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
