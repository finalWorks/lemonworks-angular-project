import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindComponent } from './two-way-bind.component';

describe('TwoWayBindComponent', () => {
  let component: TwoWayBindComponent;
  let fixture: ComponentFixture<TwoWayBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
