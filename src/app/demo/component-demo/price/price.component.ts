import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  stockCode: String = 'IBM';
  price: Number = 50;

  @Output()
  lastPrice: EventEmitter<PriceQuote> = new EventEmitter();

  @Output('anotherEventName')
  anotherLastPrice: EventEmitter<PriceQuote> = new EventEmitter();

  @Output()
  buy: EventEmitter<PriceQuote> = new EventEmitter();

  constructor() {
    setInterval(() => {
      const priceQuote: PriceQuote = new PriceQuote(this.stockCode, 100 * Math.random());
      this.price = priceQuote.lastPrice;
      // 发射数据
      this.lastPrice.emit(priceQuote);
      this.anotherLastPrice.emit(priceQuote);

      if (this.price <= 10) {
        this.buy.emit(new PriceQuote(this.stockCode, this.price));
      }
    }, 5000);
  }

  ngOnInit() {
  }

  buyStock(event: any) {
    this.buy.emit(new PriceQuote(this.stockCode, this.price));
  }

}

export class PriceQuote {
  constructor(public stockCode: String, public lastPrice: Number) { }
}
