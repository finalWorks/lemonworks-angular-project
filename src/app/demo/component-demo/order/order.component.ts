import { PriceQuote } from './../price/price.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input()
  buyPriceQuote: PriceQuote;

  stock: String = '';

  amount: Number;

  constructor() { }

  ngOnInit() {
  }
}
