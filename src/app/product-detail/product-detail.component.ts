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

  newRating: number = 5;
  newComment: string = '';

  isCommentHidden: Boolean = true;

  constructor(private routeInfo: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    const productId: number = Number('' + this.routeInfo.snapshot.params['productId']);
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getProductComments(productId);
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;
  }

  addComment() {
    let comment = new Comment(0, this.product.id, new Date().toISOString(), 'Coco', this.newRating, this.newComment);
    this.comments.unshift(comment);
    // reduce是一个数组循环方法，需要两个参数：第一个是回调函数（参数二comment是当前处理的数元素），
    // 第二个是回调函数参数一sum的初期值。
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;
    this.newRating = 5;
    this.newComment = '';
    this.isCommentHidden = true;
  }
}
