import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OndestroyDemoComponent } from './ondestroy-demo.component';

describe('OndestroyDemoComponent', () => {
  let component: OndestroyDemoComponent;
  let fixture: ComponentFixture<OndestroyDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OndestroyDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OndestroyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
