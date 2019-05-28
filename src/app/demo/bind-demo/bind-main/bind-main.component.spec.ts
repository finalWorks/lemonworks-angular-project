import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindMainComponent } from './bind-main.component';

describe('BindMainComponent', () => {
  let component: BindMainComponent;
  let fixture: ComponentFixture<BindMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
