import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
// import { Headers } from './headers';

@Component({
  selector: 'app-http-two-demo',
  templateUrl: './http-two-demo.component.html',
  styleUrls: ['./http-two-demo.component.css']
})
export class HttpTwoDemoComponent implements OnInit {

  // 在HTML中通过异步管道订阅的方式取得响应数据
  products: Observable<any>;

  constructor(private http: Http) {
    const myHeaders: Headers = new Headers();
    // 用HTTP的Basic来做身份认证的一种最常见方式
    myHeaders.append('Authorization', 'Basic 123456');
    // 此处仅仅是定义了一个HTTP请求，并没有发送请求
    this.products = this.http.get('/api/products', { headers: myHeaders }).map((res) => res.json());
  }

  ngOnInit() { }

}
