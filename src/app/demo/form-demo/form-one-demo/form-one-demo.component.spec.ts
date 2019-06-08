import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOneDemoComponent } from './form-one-demo.component';

describe('FormOneDemoComponent', () => {
  let component: FormOneDemoComponent;
  let fixture: ComponentFixture<FormOneDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOneDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOneDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
