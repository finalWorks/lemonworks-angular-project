import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSocketTwoDemoComponent } from './web-socket-two-demo.component';

describe('WebSocketTwoDemoComponent', () => {
  let component: WebSocketTwoDemoComponent;
  let fixture: ComponentFixture<WebSocketTwoDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebSocketTwoDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSocketTwoDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
