import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFourDemoComponent } from './form-four-demo.component';

describe('FormFourDemoComponent', () => {
  let component: FormFourDemoComponent;
  let fixture: ComponentFixture<FormFourDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFourDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFourDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
