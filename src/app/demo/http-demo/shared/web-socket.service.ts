import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  ws: WebSocket;

  constructor() { }

  createObservableSocket(url: string): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable(
      observer => {

        // 1.什么时候发射一个流
        // 当WebSocket收到消息时流要发射下一个元素
        this.ws.onmessage = (event) => observer.next(event.data);

        // 2.什么时候抛出一个异常
        // 当WebSocket出现问题的时候，流要抛出一个元素
        this.ws.onerror = (event) => observer.error(event);

        // 3.什么时候发射一个流结束的信号
        // 当WebSocket关闭的时候，流要发射一个流结束信号
        this.ws.onclose = (event) => observer.complete();
      }
    );
  }

  sendMessage(message: string) {
    this.ws.send(message);
  }
}
