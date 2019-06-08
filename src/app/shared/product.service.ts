import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private imgUrl: String = 'http://placehold.it/320x150/';

  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 2.11, '这是第一个商品，是我在学习慕课网Angular入门实战时创建的第一个商品', ['3C', '电脑']),
    new Product(2, '第二个商品', 2.99, 3.52, '这是第二个商品，是我在学习慕课网Angular入门实战时创建的第二个商品', ['3C', '手机']),
    new Product(3, '第三个商品', 3.99, 1.53, '这是第三个商品，是我在学习慕课网Angular入门实战时创建的第三个商品', ['3C', '相机']),
    new Product(4, '第四个商品', 4.99, 3.54, '这是第四个商品，是我在学习慕课网Angular入门实战时创建的第四个商品', ['家电', '冰箱']),
    new Product(5, '第五个商品', 5.99, 4.55, '这是第五个商品，是我在学习慕课网Angular入门实战时创建的第五个商品', ['家电', '电视机']),
    new Product(6, '第六个商品', 6.99, 3.56, '这是第六个商品，是我在学习慕课网Angular入门实战时创建的第六个商品', ['家电', '洗衣机']),
    new Product(7, '第七个商品', 6.99, 3.56, '这是第六个商品，是我在学习慕课网Angular入门实战时创建的第六个商品', ['家电', '洗衣机'])
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2019/03/03 12:00:12', '小李', 1, '差評'),
    new Comment(1, 2, '2019/03/03 12:11:12', '小孫', 1, '差評'),
    new Comment(1, 3, '2019/03/03 12:22:12', '小王', 1, '差評'),
    new Comment(1, 4, '2019/03/03 12:33:12', 'Coco', 0, '差評'),
    new Comment(1, 5, '2019/03/03 12:44:12', 'Tom', 0, '差評'),
    new Comment(1, 6, '2019/03/03 12:55:12', 'Jerry', 0, '差評'),
    new Comment(1, 7, '2019/03/03 12:06:12', 'Lily', 0, '差評'),
    new Comment(2, 1, '2019/03/03 14:00:12', '小李', 4, '好評'),
    new Comment(2, 2, '2019/03/03 14:11:12', '小孫', 4, '好評'),
    new Comment(2, 3, '2019/03/03 14:22:12', '小王', 4, '好評'),
    new Comment(2, 4, '2019/03/03 14:33:12', 'Coco', 5, '好評'),
    new Comment(2, 5, '2019/03/03 14:44:12', 'Tom', 5, '好評'),
    new Comment(2, 6, '2019/03/03 14:55:12', 'Jerry', 5, '好評'),
    new Comment(2, 7, '2019/03/03 14:06:12', 'Lily', 5, '好評')
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product: Product) => product.id === id);
  }

  getProductComments(id: number): Comment[] {
    return this.comments.filter((conmment: Comment) => conmment.productId === id);
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>) {
  }
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public username: string,
    public rating: number,
    public content: string) {
  }
}
