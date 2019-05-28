import { Product } from './../demo-shared/product1.service';
import { Component, OnInit } from '@angular/core';
import { Product2Service } from '../demo-shared/product2.service';

@Component({
  selector: 'app-product3',
  templateUrl: './product3.component.html',
  styleUrls: ['./product3.component.css']
})
export class Product3Component implements OnInit {

  product: Product;

  constructor(private productService: Product2Service) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
