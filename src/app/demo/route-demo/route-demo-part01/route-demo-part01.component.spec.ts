import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDemoPart01Component } from './route-demo-part01.component';

describe('RouteDemoPart01Component', () => {
  let component: RouteDemoPart01Component;
  let fixture: ComponentFixture<RouteDemoPart01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDemoPart01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDemoPart01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
