import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomAttributeBindComponent } from './dom-attribute-bind.component';

describe('DomAttributeBindComponent', () => {
  let component: DomAttributeBindComponent;
  let fixture: ComponentFixture<DomAttributeBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomAttributeBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomAttributeBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
