import { Injectable } from '@angular/core';
import { AgsmService } from 'agsm';
import { productsReducer } from './reducers/products/product.reducer';
import { authReducer } from './reducers/auth/auth.reducer';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private agsm: AgsmService) {
    this.agsm.linkDevTools(false);
    this.agsm.addReducer('productsList', productsReducer);
    this.agsm.addReducer('userInfo', authReducer);
  }
}
