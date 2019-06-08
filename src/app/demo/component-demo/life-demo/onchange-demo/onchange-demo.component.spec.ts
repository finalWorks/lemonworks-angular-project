import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnchangeDemoComponent } from './onchange-demo.component';

describe('OnchangeDemoComponent', () => {
  let component: OnchangeDemoComponent;
  let fixture: ComponentFixture<OnchangeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnchangeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnchangeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
