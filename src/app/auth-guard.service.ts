import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { authActionsService } from './app-states/actions/auth/auth-action.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authActions: authActionsService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.authActions.isAuthenticated()) return true;
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
