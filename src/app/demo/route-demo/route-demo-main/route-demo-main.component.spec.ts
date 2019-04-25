import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDemoMainComponent } from './route-demo-main.component';

describe('RouteDemoMainComponent', () => {
  let component: RouteDemoMainComponent;
  let fixture: ComponentFixture<RouteDemoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDemoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDemoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
