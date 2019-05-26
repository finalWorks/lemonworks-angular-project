import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDemoPart09Component } from './route-demo-part09.component';

describe('RouteDemoPart09Component', () => {
  let component: RouteDemoPart09Component;
  let fixture: ComponentFixture<RouteDemoPart09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDemoPart09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDemoPart09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
