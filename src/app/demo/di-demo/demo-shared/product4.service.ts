import { LoggerService } from './logger.service';
import { Product } from './product1.service';
import { Injectable } from '@angular/core';

@Injectable()
export class Product4Service {

  constructor(public logger: LoggerService) { }

  getProduct(): Product {
    return new Product(1, 'MI', 3999, '最新款小米手机');
  }
}
