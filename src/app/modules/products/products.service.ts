import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

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
