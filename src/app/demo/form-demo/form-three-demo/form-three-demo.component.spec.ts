import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormThreeDemoComponent } from './form-three-demo.component';

describe('FormThreeDemoComponent', () => {
  let component: FormThreeDemoComponent;
  let fixture: ComponentFixture<FormThreeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormThreeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormThreeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
