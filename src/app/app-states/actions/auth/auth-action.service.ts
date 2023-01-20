import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../../types/auth/types';
import { AgsmService } from 'agsm';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class authActionsService {
  constructor(
    private http: HttpClient,
    private agsm: AgsmService,
    private router: Router
  ) {}

  async login(username: string, password: string) {
    this.agsm.dispatch(LOGIN_REQUEST);
    console.log('test2');

    try {
      const user = await this.http
        .post<any>(
          'https://dummyjson.com/auth/login',
          {
            username,
            password,
          },
          httpOptions
        )
        .toPromise();
      console.log(user);
      this.agsm.dispatch(LOGIN_SUCCESS, user);
      localStorage.setItem('userInfo', JSON.stringify(user));
      this.router.navigate(['/products']);
    } catch (e: any) {
      this.agsm.dispatch(LOGIN_FAIL, e.message);
    }
  }

  logout() {
    this.agsm.dispatch(LOGOUT);
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cart');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('userInfo')) return true;
    else return false;
  }

  getUserInfo() {
    return localStorage.getItem('userInfo');
  }

  autoLogin() {
    // const userInfo = localStorage.getItem('userInfo');
    // if (!userInfo) return;
    // this.router.navigate(['/products']);
    // this.user.next(JSON.parse(userInfo));
  }
}
