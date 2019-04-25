import { Comment, Product, ProductService } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private product: Product;
  private comments: Comment[];
  constructor(private routeInfo: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    const productId: number = Number('' + this.routeInfo.snapshot.params['productId']);
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getProductComments(productId);
  }

}
