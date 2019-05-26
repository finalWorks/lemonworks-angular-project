import { Product, Product1Service } from './../demo-shared/product1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  product: Product;

  constructor(private productService: Product1Service) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
