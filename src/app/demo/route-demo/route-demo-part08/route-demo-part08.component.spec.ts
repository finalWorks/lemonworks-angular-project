import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDemoPart08Component } from './route-demo-part08.component';

describe('RouteDemoPart08Component', () => {
  let component: RouteDemoPart08Component;
  let fixture: ComponentFixture<RouteDemoPart08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDemoPart08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDemoPart08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
