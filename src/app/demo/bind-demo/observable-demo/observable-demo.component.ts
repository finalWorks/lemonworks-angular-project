import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  private cardNo: Number = 0;

  public cardInfo: FormControl = new FormControl();
  public cardInfoDebounceTime: FormControl = new FormControl();

  constructor() {
    // 可观察对象
    Observable.from([1, 2, 3, 4, 5, 6, 7])
      .filter(e => e % 2 === 0)
      .map(f => f * f)
      .subscribe(
        g => { // 处理流中的元素
          console.log(g);
          this.cardNo = g;
        },
        err => console.log(err), // 处理流中的异常
        () => console.log('结束了') // 处理流的结束
      );

      this.cardInfo.valueChanges.subscribe(inputValue => this.getCardInfo(inputValue));
      // 延迟500ms
      this.cardInfoDebounceTime.valueChanges.debounceTime(500).subscribe(inputValue => this.getCardInfo(inputValue));
  }

  ngOnInit() {
  }

  onKeyEvent1(event: any) {
    console.log(event.target.value);
  }

  // 使用模板本地变量来传参
  onKeyEvent2(myField: String) {
    console.log(myField);
  }

  getCardInfo(inputValue: String) {
    console.log('输入的卡片信息是：' + inputValue);
  }

}
