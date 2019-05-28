import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class Product1Service {

  constructor(public logger: LoggerService) { }

  getProduct(): Product {
    return new Product(2, 'huawei', 5499, '最新款华为手机');
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
