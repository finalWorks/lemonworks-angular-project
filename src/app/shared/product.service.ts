import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
// 必须引用以下包，否则参数不会通过URL送给服务端。
import {URLSearchParams} from '@angular/http';
// import 'rxjs/add/observable/from';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  searchEvent: EventEmitter<ProductSeachParams> = new EventEmitter();

  private imgUrl: String = 'http://placehold.it/320x150/';

  constructor(private http: Http) { }

  getProducts(): Observable<Product[]> {
    return this.http.get('/api/products').map(res => res.json());
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get('/api/product/' + id).map(res => res.json());
  }

  getProductComments(id: number): Observable<Comment[]> {
    return this.http.get('/api/product/' + id + '/comments').map(res => res.json());
  }

  getAllCategories(): string[] {
    return ['3C', '家电'];
  }

  search(params: ProductSeachParams): Observable<Product[]> {
    return this.http.get('/api/products', { search: this.encodeParams(params) }).map(res => res.json());
  }

  private encodeParams(params: ProductSeachParams): URLSearchParams {
    let result: URLSearchParams;

    result = Object.keys(params)
      .filter(key => params[key])
      .reduce((sum: URLSearchParams, key: string) => {
        sum.append(key, params[key]);
        return sum;
      }, new URLSearchParams());

    console.log(result.get('title'));
    console.log(result.get('price'));
    console.log(result.get('category'));
    console.log(result.toString());
    return result;
  }
}

export class ProductSeachParams {
  constructor(public title: string, public price: number, public category: string) {

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
