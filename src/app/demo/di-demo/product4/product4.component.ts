import { Component, OnInit } from '@angular/core';
import { Product } from '../demo-shared/product1.service';
import { Product2Service } from '../demo-shared/product2.service';

@Component({
  selector: 'app-product4',
  templateUrl: './product4.component.html',
  styleUrls: ['./product4.component.css']
})
export class Product4Component implements OnInit {

  product: Product;

  constructor(private productService: Product2Service) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
