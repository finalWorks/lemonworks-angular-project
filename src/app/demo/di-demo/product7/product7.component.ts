import { Product } from './../demo-shared/product1.service';
import { Component, OnInit } from '@angular/core';
import { Product4Service } from '../demo-shared/product4.service';

@Component({
  selector: 'app-product7',
  templateUrl: './product7.component.html',
  styleUrls: ['./product7.component.css']
})
export class Product7Component implements OnInit {

  product: Product;

  constructor(private productService: Product4Service) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
