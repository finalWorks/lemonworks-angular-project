import { Component, OnInit } from '@angular/core';
import { PriceQuote } from '../price/price.component';

@Component({
  selector: 'app-component-demo',
  templateUrl: './component-demo.component.html',
  styleUrls: ['./component-demo.component.css']
})
export class ComponentDemoComponent implements OnInit {

  priceQuote: PriceQuote = new PriceQuote('', 0);
  anotherPriceQuote: PriceQuote = new PriceQuote('', 0);

  private buyPriceQuote: PriceQuote;

  constructor() {  }

  ngOnInit() {
  }

  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }

  anotherPriceQuoteHandler(event: PriceQuote) {
    this.anotherPriceQuote = event;
  }

  buyHandler(event: PriceQuote) {
    this.buyPriceQuote = event;
  }

}
