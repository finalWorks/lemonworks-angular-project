import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-view-life-demo',
  templateUrl: './view-life-demo.component.html',
  styleUrls: ['./view-life-demo.component.css']
})
export class ViewLifeDemoComponent implements OnInit, AfterViewInit, AfterViewChecked {

  private message: String = 'AAA';
  constructor() { }

  ngOnInit() {
  }

  greeting(name: String) {
    console.log('Hello ' + name);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit：子组件的视图初始化完毕。');
    // 由于视图已经初期化完成了，以下代码再来变更模板属性值时，
    // ngAfterViewChecked便跟检测会报错。
    // 注意必须是模板属性值的改变，控制器内部变量值的改变不会激发错误。
    /*
    ViewLifeDemoComponent.html:4 ERROR Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: 'model: AAA'. Current value: 'model: BBB'.
      at viewDebugError (core.js:16878)
      at expressionChangedAfterItHasBeenCheckedError (core.js:16866)
      at checkBindingNoChanges (core.js:16968)
      at checkNoChangesNodeInline (core.js:19839)
      at checkNoChangesNode (core.js:19828)
      at debugCheckNoChangesNode (core.js:20432)
      at debugCheckDirectivesFn (core.js:20360)
      at Object.eval [as updateDirectives] (ViewLifeDemoComponent.html:4)
      at Object.debugUpdateDirectives [as updateDirectives] (core.js:20349)
      at checkNoChangesView (core.js:19727)
    */
    // this.message = 'BBB';
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked：子组件的视图变更检测完毕。');
    // 同样在此方法中做如上ngAfterViewInit所述的设置模板属性值也会有同样的错误。
    // 可以通过如下方式解决，即：将设置处理放到另一个时间循环中。
    // setTimeout(() => {
    //   this.message = 'BBB';
    // }, 3000);
  }
}
