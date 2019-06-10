import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpOneDemoComponent } from './http-one-demo.component';

describe('HttpOneDemoComponent', () => {
  let component: HttpOneDemoComponent;
  let fixture: ComponentFixture<HttpOneDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpOneDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpOneDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
