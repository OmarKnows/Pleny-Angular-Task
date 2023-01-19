import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  CART_FAIL,
  CART_REQUEST,
  CART_SUCCESS,
  ADD_TO_CART_FAIL,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
} from '../../types/cart/types';
import { AgsmService } from 'agsm';
import { BehaviorSubject, scan, Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class cartActionsService {
  private cartItems = new BehaviorSubject(0);
  currentItems = this.cartItems.asObservable();

  constructor(private http: HttpClient, private agsm: AgsmService) {}

  async getUserCart(userId: number) {
    this.agsm.dispatch(CART_REQUEST);

    try {
      const cart: any = await this.http
        .get<any>(`https://dummyjson.com/carts/user/${userId}`, httpOptions)
        .toPromise();

      this.agsm.dispatch(CART_SUCCESS, cart);
      localStorage.setItem('cart', JSON.stringify(cart));
      this.cartItems.next(cart.carts[0].totalQuantity);
    } catch (e: any) {
      this.agsm.dispatch(CART_FAIL, e.message);
    }
  }

  async addToCart(cartId: number, id: number, quantity: number) {
    this.agsm.dispatch(ADD_TO_CART_REQUEST);

    try {
      let cart = JSON.parse(localStorage.getItem('cart') || '{}');
      cart.carts[0].totalQuantity++;

      localStorage.setItem('cart', JSON.stringify(cart));
      this.cartItems.next(cart.carts[0].totalQuantity);
    } catch (e: any) {
      this.agsm.dispatch(ADD_TO_CART_FAIL, e.message);
    }
  }
}
