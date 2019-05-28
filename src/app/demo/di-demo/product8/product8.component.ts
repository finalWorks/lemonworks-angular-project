import { Product } from './../demo-shared/product1.service';
import { Component, OnInit } from '@angular/core';
import { Product4Service } from '../demo-shared/product4.service';

@Component({
  selector: 'app-product8',
  templateUrl: './product8.component.html',
  styleUrls: ['./product8.component.css']
})
export class Product8Component implements OnInit {

  product: Product;

  constructor(private productService: Product4Service) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
