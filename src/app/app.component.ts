import { Component, OnInit } from '@angular/core';
import { AgsmService } from 'agsm';
import { authActionsService } from './app-states/actions/auth/auth-action.service';
import { StoreService } from './app-states/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: StoreService,
    private agsm: AgsmService,
    private authActions: authActionsService
  ) {}

  ngOnInit(): void {
    // this.authActions.autoLogin();
  }

  title = 'Pleny-Angular-Task';
}
