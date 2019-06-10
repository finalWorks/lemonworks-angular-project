import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpTwoDemoComponent } from './http-two-demo.component';

describe('HttpTwoDemoComponent', () => {
  let component: HttpTwoDemoComponent;
  let fixture: ComponentFixture<HttpTwoDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpTwoDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpTwoDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
