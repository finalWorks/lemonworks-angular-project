import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderChildComponent } from './order-child.component';

describe('OrderChildComponent', () => {
  let component: OrderChildComponent;
  let fixture: ComponentFixture<OrderChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
