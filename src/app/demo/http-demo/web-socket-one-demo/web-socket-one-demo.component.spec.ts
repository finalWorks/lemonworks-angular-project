import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSocketOneDemoComponent } from './web-socket-one-demo.component';

describe('WebSocketOneDemoComponent', () => {
  let component: WebSocketOneDemoComponent;
  let fixture: ComponentFixture<WebSocketOneDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebSocketOneDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSocketOneDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
