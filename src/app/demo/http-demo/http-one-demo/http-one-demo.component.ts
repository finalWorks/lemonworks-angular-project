import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Component({
  selector: 'app-http-one-demo',
  templateUrl: './http-one-demo.component.html',
  styleUrls: ['./http-one-demo.component.css']
})
export class HttpOneDemoComponent implements OnInit {

  // 用接收HTTP响应中接收到的流
  dataSource: Observable<any>;

  // 用模板绑定，控制显示
  products: Array<any> = [];

  constructor(private http: Http) {
    // 此处仅仅是定义了一个HTTP请求，并没有发送请求
    this.dataSource = this.http.get('/api/products').map((res) => res.json());
  }

  ngOnInit() {
    // 此处发送HTTP请求
    this.dataSource.subscribe((data) => this.products = data);
  }

}
