import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediatorComponent } from './intermediator.component';

describe('IntermediatorComponent', () => {
  let component: IntermediatorComponent;
  let fixture: ComponentFixture<IntermediatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermediatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
