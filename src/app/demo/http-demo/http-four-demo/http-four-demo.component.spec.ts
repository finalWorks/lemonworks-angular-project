import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpFourDemoComponent } from './http-four-demo.component';

describe('HttpFourDemoComponent', () => {
  let component: HttpFourDemoComponent;
  let fixture: ComponentFixture<HttpFourDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpFourDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpFourDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
