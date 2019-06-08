import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocheckDemoComponent } from './docheck-demo.component';

describe('DocheckDemoComponent', () => {
  let component: DocheckDemoComponent;
  let fixture: ComponentFixture<DocheckDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocheckDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocheckDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
