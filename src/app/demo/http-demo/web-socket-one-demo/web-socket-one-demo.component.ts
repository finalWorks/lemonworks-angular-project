import { WebSocketService } from './../shared/web-socket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-socket-one-demo',
  templateUrl: './web-socket-one-demo.component.html',
  styleUrls: ['./web-socket-one-demo.component.css']
})
export class WebSocketOneDemoComponent implements OnInit {

  constructor(private wsService: WebSocketService) { }

  ngOnInit() {
    this.wsService.createObservableSocket('ws://localhost:8085').subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('err'))
  }

  sendMessageToServer() {
    this.wsService.sendMessage('Hello From Client');
  }
}
