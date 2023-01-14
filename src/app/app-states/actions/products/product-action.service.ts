import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  PRODUCTS_FAIL,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
} from '../../types/products/types';
import { AgsmService } from 'agsm';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class productActionsService {
  constructor(private http: HttpClient, private agsm: AgsmService) {}

  async getproducts() {
    this.agsm.dispatch(PRODUCTS_REQUEST);

    try {
      const products = await this.http
        .get<any>('https://dummyjson.com/products', httpOptions)
        .toPromise();

      this.agsm.dispatch(PRODUCTS_SUCCESS, products);
    } catch (e: any) {
      this.agsm.dispatch(PRODUCTS_FAIL, e.message);
    }
  }
}
