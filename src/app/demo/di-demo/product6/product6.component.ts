import { Product } from './../demo-shared/product1.service';
import { Component, OnInit } from '@angular/core';
import { Product3Service } from '../demo-shared/product3.service';

@Component({
  selector: 'app-product6',
  templateUrl: './product6.component.html',
  styleUrls: ['./product6.component.css']
})
export class Product6Component implements OnInit {

  product: Product;

  constructor(private productService: Product3Service) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
