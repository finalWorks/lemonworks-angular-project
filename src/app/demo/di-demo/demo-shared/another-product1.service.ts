import { LoggerService } from './logger.service';
import { Product, Product1Service } from './product1.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AnotherProduct1Service implements Product1Service{

  constructor(public logger: LoggerService) { }

  getProduct(): Product {
    return new Product(1, 'iphone7', 6999, '最新款苹果手机');
  }
}
