import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product8Component } from './product8.component';

describe('Product8Component', () => {
  let component: Product8Component;
  let fixture: ComponentFixture<Product8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
