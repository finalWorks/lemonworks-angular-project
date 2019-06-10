import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpThreeDemoComponent } from './http-three-demo.component';

describe('HttpThreeDemoComponent', () => {
  let component: HttpThreeDemoComponent;
  let fixture: ComponentFixture<HttpThreeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpThreeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpThreeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
