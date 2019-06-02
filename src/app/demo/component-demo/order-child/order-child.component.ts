import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-child',
  templateUrl: './order-child.component.html',
  styleUrls: ['./order-child.component.css']
})
export class OrderChildComponent implements OnInit {

  @Input()
  stockCode: String;

  @Input()
  amountCnt: Number;

  constructor() {
    setInterval(() => {
      this.stockCode = 'Apple';
    }, 3000);
  }

  ngOnInit() {
  }

}
