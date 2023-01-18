import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../../types/auth/types';
import { AgsmService } from 'agsm';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { Subject } from 'rxjs';

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
