import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeDemoComponent } from './life-demo.component';

describe('LifeDemoComponent', () => {
  let component: LifeDemoComponent;
  let fixture: ComponentFixture<LifeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
