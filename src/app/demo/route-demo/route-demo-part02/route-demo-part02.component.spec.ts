import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDemoPart02Component } from './route-demo-part02.component';

describe('RouteDemoPart02Component', () => {
  let component: RouteDemoPart02Component;
  let fixture: ComponentFixture<RouteDemoPart02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDemoPart02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDemoPart02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
