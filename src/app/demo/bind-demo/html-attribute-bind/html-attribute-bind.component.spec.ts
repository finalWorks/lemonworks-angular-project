import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlAttributeBindComponent } from './html-attribute-bind.component';

describe('HtmlAttributeBindComponent', () => {
  let component: HtmlAttributeBindComponent;
  let fixture: ComponentFixture<HtmlAttributeBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlAttributeBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlAttributeBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
