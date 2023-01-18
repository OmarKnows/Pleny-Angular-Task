import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  PRODUCTS_FAIL,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  SEARCH_FAIL,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  FILTER_FAIL,
  FILTER_REQUEST,
  FILTER_SUCCESS,
} from '../../types/products/types';
import { AgsmService } from 'agsm';
import { authActionsService } from '../auth/auth-action.service';

@Injectable({
  providedIn: 'root',
})
export class productActionsService {
  constructor(
    private http: HttpClient,
    private agsm: AgsmService,
    private authActions: authActionsService
  ) {}

  async getProducts(limit: number, skip: number) {
    this.agsm.dispatch(PRODUCTS_REQUEST);

    const Authorization =
      'Bearer ' + JSON.parse(this.authActions.getUserInfo() || '{}').token;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization,
        'Content-Type': 'application/json',
      }),
    };

    try {
      const products = await this.http
        .get<any>(
          `https://dummyjson.com/auth/products?limit=${limit}&skip=${skip}`,
          httpOptions
        )
        .toPromise();

      this.agsm.dispatch(PRODUCTS_SUCCESS, products);
    } catch (e: any) {
      this.agsm.dispatch(PRODUCTS_FAIL, e.message);
    }
  }

  async searchProducts(keyword: string) {
    this.agsm.dispatch(SEARCH_REQUEST);
    try {
      const products = await this.http
        .get<any>(`https://dummyjson.com/products/search?q=${keyword}`)
        .toPromise();
      this.agsm.dispatch(SEARCH_SUCCESS, products);
    } catch (e: any) {
      this.agsm.dispatch(SEARCH_FAIL, e.message);
    }
  }

  async filterProducts(category: string) {
    this.agsm.dispatch(FILTER_REQUEST);

    try {
      const products = await this.http
        .get<any>(`https://dummyjson.com/products/category/${category}`)
        .toPromise();
      this.agsm.dispatch(FILTER_SUCCESS, products);
    } catch (e: any) {
      this.agsm.dispatch(FILTER_FAIL, e.message);
    }
  }
}
