import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherFormValidationDemoComponent } from './another-form-validation-demo.component';

describe('AnotherFormValidationDemoComponent', () => {
  let component: AnotherFormValidationDemoComponent;
  let fixture: ComponentFixture<AnotherFormValidationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherFormValidationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherFormValidationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
