import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeBindComponent } from './attribute-bind.component';

describe('AttributeBindComponent', () => {
  let component: AttributeBindComponent;
  let fixture: ComponentFixture<AttributeBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
