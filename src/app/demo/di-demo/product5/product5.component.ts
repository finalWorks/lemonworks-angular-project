import { Product } from './../demo-shared/product1.service';
import { Component, OnInit } from '@angular/core';
import { Product3Service } from '../demo-shared/product3.service';

@Component({
  selector: 'app-product5',
  templateUrl: './product5.component.html',
  styleUrls: ['./product5.component.css']
})
export class Product5Component implements OnInit {

  product: Product;

  constructor(private productService: Product3Service) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
