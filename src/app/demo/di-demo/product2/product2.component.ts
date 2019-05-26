import { AnotherProduct1Service } from './../demo-shared/another-product1.service';
import { Product, Product1Service } from './../demo-shared/product1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  providers: [{
    provide: Product1Service, useClass: AnotherProduct1Service
  }]
})
export class Product2Component implements OnInit {

  product: Product;

  constructor(private productService: Product1Service) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}