import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeListDemoComponent } from './life-list-demo.component';

describe('LifeListDemoComponent', () => {
  let component: LifeListDemoComponent;
  let fixture: ComponentFixture<LifeListDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeListDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
