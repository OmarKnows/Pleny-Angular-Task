import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  fetchProducts() {
    return this.http.get('https://dummyjson.com/products').pipe(
      map((response: any) => {
        var { products } = response;
        return products;
      })
    );
  }

  getProductCategories() {
    return this.http
      .get<string[]>('https://dummyjson.com/products/categories')
      .pipe(
        map((response: any) => {
          return [...response];
        })
      );
  }
}
