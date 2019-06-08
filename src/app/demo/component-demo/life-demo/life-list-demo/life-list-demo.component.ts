import { ViewLifeDemoComponent } from './../view-life-demo/view-life-demo.component';
import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input, ViewChild
} from '@angular/core';

let logIndex = 0;

@Component({
  selector: 'app-life-list-demo',
  templateUrl: './life-list-demo.component.html',
  styleUrls: ['./life-list-demo.component.css']
})
export class LifeListDemoComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // 模板本地变量，类似GetHTML的显示控制方法的调用
  @ViewChild('child1')
  child1: ViewLifeDemoComponent;

  @ViewChild('child2')
  child2: ViewLifeDemoComponent;

  @Input()
  name: String;

  private greeting: String = 'Hello';
  private user: {name: String} = {name: '钢铁侠'};

  private divContent: String = '<div><p style="color:blue;">通过属性绑定的方式嵌入的表示内容</p></div>';
  private divContent1: String = '<div><p style="color:blue;">这也是通过属性绑定的方式嵌入的表示内容</p></div>';

  constructor() {
    this.logIt('name属性在constructor里的值是：' + name);
  }

  logIt(msg: String) {
    console.log(`#${logIndex++} ${msg}`);
  }

  ngOnInit() {
    this.logIt('name属性在ngOnInit里的值是：' + name);
    this.child1.greeting('父组件控制器中调用子组件方法1');
    this.child2.greeting('父组件控制器中调用子组件方法2');
  }

  ngOnChanges(changes: SimpleChanges): void {
    const name: String = changes['name'].currentValue;
    this.logIt('name属性在ngOnChanges里的值是：' + name);
  }

  ngDoCheck(): void {
    this.logIt('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.logIt('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.logIt('ngAfterContentChecked');
    // 和AfterView的勾子不一样，以下投影相关的模板属性内容的修改也不会造成运行错误。
    // this.user.name = '蜘蛛侠';
  }

  ngAfterViewInit(): void {
    this.logIt('ngAfterViewInit：父组件的视图初始化完毕。');
  }

  ngAfterViewChecked(): void {
    this.logIt('ngAfterViewChecked：父组件的视图变更检测完毕。');
  }

  ngOnDestroy() {
    this.logIt('ngOnDestroy');
  }

}
