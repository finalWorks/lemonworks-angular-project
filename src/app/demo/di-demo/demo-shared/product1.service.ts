import { Injectable } from '@angular/core';

@Injectable()
export class Product1Service {

  constructor() { }

  getProduct(): Product {
    return new Product(1, 'iphone7', 6999, '最新款苹果手机');
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) { }
}
