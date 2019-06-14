import { ProductService, Product } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private imgUrl: String = 'http://placehold.it/320x150/';
  private products: Product[];

  private keyword: string;
  private titleFilter: FormControl = new FormControl();

  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges.pipe(debounceTime(500)).subscribe(
      value => this.keyword = value
    );
  }

  // 组件被实例化后，唯一调用一次。
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
