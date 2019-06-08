import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-onchange-demo',
  templateUrl: './onchange-demo.component.html',
  styleUrls: ['./onchange-demo.component.css']
})
export class OnchangeDemoComponent implements OnInit, OnChanges {

  @Input()
  greeting: String;

  @Input()
  user: { name: String };

  message: String = '初始化消息';

  constructor() {
    /*
    // 不可变对象，当值变化时，其指向的地址随之变化
    let greeting: String = 'A';
    greeting = 'B';

    // 可变对象，当值变化时，其指向的地址不变
    const user = { name: '绿巨人' };
    user.name = '浩克';
    */
  }

  ngOnInit() {
  }

  /*
   ngOnChanges监控输入属性中的不可变对象的变化。
  */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('触发ngOnChanges事件：' + JSON.stringify(changes, null, 2));
  }

}
