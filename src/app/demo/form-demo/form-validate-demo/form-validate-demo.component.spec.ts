import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidateDemoComponent } from './form-validate-demo.component';

describe('FormValidateDemoComponent', () => {
  let component: FormValidateDemoComponent;
  let fixture: ComponentFixture<FormValidateDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidateDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
