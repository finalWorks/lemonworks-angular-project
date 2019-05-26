import { Product, Product1Service } from './product1.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AnotherProduct1Service implements Product1Service{

  constructor() { }

  getProduct(): Product {
    return new Product(2, 'huawei', 5499, '最新款华为手机');
  }
}
