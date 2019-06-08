import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-life-demo',
  templateUrl: './content-life-demo.component.html',
  styleUrls: ['./content-life-demo.component.css']
})
export class ContentLifeDemoComponent implements OnInit {
/*
投影：有时希望在画面的指定位置显示一张图片，有时有希望在该位置上显示一张表格。
     这就是投影。
在Angular中可以使用ngContent指令将父组件的任意模板片段投影到子组件中。
*/
  constructor() { }

  ngOnInit() {
  }

}
