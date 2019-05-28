import { LoggerService } from './logger.service';
import { Product } from './product1.service';
import { Injectable } from '@angular/core';

@Injectable()
export class Product2Service {

  constructor(public logger: LoggerService) { }

  getProduct(): Product {
    return new Product(1, 'oppo', 4999, '最新款OPPO手机');
  }
}
