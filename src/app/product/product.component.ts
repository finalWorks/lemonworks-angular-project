import { ProductService, Product } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private imgUrl: String = 'http://placehold.it/320x150/';
  private products: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  // 组件被实例化后，唯一调用一次。
  ngOnInit() {
    this.products = this.productService.getProducts();

    this.productService.searchEvent.subscribe(
      params => this.products = this.productService.search(params)
    );
  }

}
