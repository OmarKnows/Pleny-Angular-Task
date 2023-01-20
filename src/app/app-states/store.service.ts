import { Injectable } from '@angular/core';
import { AgsmService } from 'agsm';
import { productsReducer } from './reducers/products/product.reducer';
import { authReducer } from './reducers/auth/auth.reducer';
import { cartReducer } from './reducers/cart/cart.reducer';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  user: User = {
    id: 0,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    image: '',
    token: '',
  };
  cart: any = null;

  constructor(private agsm: AgsmService, private store: AgsmService) {
    this.agsm.linkDevTools(false);

    // this.user = localStorage.getItem('userInfo')
    //   ? JSON.parse(localStorage.getItem('userInfo') || '{}')
    //   : null;

    // this.cart = localStorage.getItem('cart')
    //   ? JSON.parse(localStorage.getItem('cart') || '{}')
    //   : null;

    this.agsm.addReducer('productsList', productsReducer);
    this.agsm.addReducer('user', authReducer);
    this.agsm.addReducer('cart', cartReducer);

    // this.store.setStoreInitialState({
    //   user: this.user,
    //   cart: this.cart,
    // });
  }
}
