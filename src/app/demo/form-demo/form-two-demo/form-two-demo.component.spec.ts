import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTwoDemoComponent } from './form-two-demo.component';

describe('FormTwoDemoComponent', () => {
  let component: FormTwoDemoComponent;
  let fixture: ComponentFixture<FormTwoDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTwoDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTwoDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
