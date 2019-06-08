import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-docheck-demo',
  templateUrl: './docheck-demo.component.html',
  styleUrls: ['./docheck-demo.component.css']
})
export class DocheckDemoComponent implements OnInit, DoCheck {
  /*
  angular的变更检测机制是基于zone.js实现的。
  主要是为了保证组件的属性的变化和页面的变化同步。
  浏览器中所发生的任何异步事件都会触法变更检测，比如点击按钮，输入数据，数据从服务器中返回了调用了setTimeout方法等等。

  只是将组件属性的改变反映到模板上，本身永远不会改变组件的属性值。

  只有两种变更检测机制：Default策略，OnPush策略
  1.Default策略：父组件或子孙组件发生变更后，父组件及其全部子组件，孙组件等都要检查
  2.OnPush策略：父组件发生变更后，若其子组件，孙组件等指定为“OnPush”，则相应组件不进行检查。
  */
  @Input()
  greeting: String;

  @Input()
  user: { name: String };

  message: String = '初始化消息';
  oldUserName: String;
  changeDelected: Boolean = false;

  nochangeCnt = 0;
  changeCnt = 0;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.user.name !== this.oldUserName) {
      this.changeDelected = true;
      console.log('触发ngDoCheck事件：' + '姓名从' + this.oldUserName + '变成' + this.user.name);
      this.oldUserName = this.user.name;
    }
    if (!this.changeDelected) {
      this.nochangeCnt++;
      console.log('姓名没变化时，ngDoCheck方法已经被触发的次数是：' + this.nochangeCnt + '次');
    } else {
      this.changeCnt++;
      this.nochangeCnt = 0;
      console.log('姓名变化时，ngDoCheck方法触发的次数是：' + this.changeCnt + '次');
    }

    this.changeDelected = false;
  }
}
