import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/observable/from';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private imgUrl: String = 'http://placehold.it/320x150/';

  constructor(private http: Http) { }

  getProducts(): Observable<Product[]> {
    return this.http.get('api/products').map(res => res.json());
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get('api/product/' + id).map(res => res.json());
  }

  getProductComments(id: number): Observable<Comment[]> {
    return this.http.get('api/product/' + id + '/comments').map(res => res.json());
  }

  getAllCategories(): string[] {
    return ['3C', '家电'];
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
