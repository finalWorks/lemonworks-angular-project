import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-bind',
  templateUrl: './two-way-bind.component.html',
  styleUrls: ['./two-way-bind.component.css']
})
export class TwoWayBindComponent implements OnInit {

  private name: String = '';
  // 不在控制器中定义此变量，HTML中也可以呈现双向绑定的效果，
  // 只是控制器中无法获取该项目值用于逻辑处理。
  private name1: String = '';

  constructor() {
    setInterval(() => {
      this.name = 'Tom';
    }, 3000);
  }

  ngOnInit() {
  }

  inputEvent(event: any) {
    // 非Angular简便方式来实现双向绑定时，控制器必须有的设值逻辑。
    this.name = event.target.value;
    console.log(this.name);
  }

  clickEvent(event: any) {
    alert(this.name1);
  }
}
