import { LoggerService } from './logger.service';
import { Product } from './product1.service';
import { Injectable } from '@angular/core';

@Injectable()
export class Product3Service {

  constructor(public logger: LoggerService) { }

  getProduct(): Product {
    return new Product(1, 'vivo', 4998, '最新款VIVO手机');
  }
}
