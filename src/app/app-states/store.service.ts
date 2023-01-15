import { Injectable } from '@angular/core';
import { AgsmService } from 'agsm';
import { productsReducer } from './reducers/products/product.reducer';
import { authReducer } from './reducers/auth/auth.reducer';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  user: User | null = null;

  constructor(private agsm: AgsmService, private store: AgsmService) {
    this.agsm.linkDevTools(false);

    this.user = localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo')|| '{}')
      : null;


    this.agsm.addReducer('productsList', productsReducer);
    this.agsm.addReducer('user', authReducer);

    this.store.setStoreInitialState({
      user: this.user,
    });
  }
}
