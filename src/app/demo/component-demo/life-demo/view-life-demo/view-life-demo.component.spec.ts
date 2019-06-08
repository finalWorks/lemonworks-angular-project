import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLifeDemoComponent } from './view-life-demo.component';

describe('ViewLifeDemoComponent', () => {
  let component: ViewLifeDemoComponent;
  let fixture: ComponentFixture<ViewLifeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLifeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLifeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
