import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({ providedIn: 'root' })
export class loginService {
  user = new Subject<User>();

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<User>('https://dummyjson.com/auth/login', {
      username,
      password,
    });
  }
}
