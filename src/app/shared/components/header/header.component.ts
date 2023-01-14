import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AgsmService } from 'agsm';
import { Subscription } from 'rxjs';
import { authActionsService } from 'src/app/app-states/actions/auth/auth-action.service';
import { productActionsService } from 'src/app/app-states/actions/products/product-action.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  private authSubscription: Subscription;

  constructor(
    private agsm: AgsmService,
    private productActions: productActionsService
  ) {}

  ngOnInit(): void {
    this.authSubscription = this.agsm
      .stateSelector((state) => state.user)
      .subscribe((stateValue) => {
        this.isAuthenticated = stateValue.isAuthenticated;
      });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.productActions.searchProducts(form.value);
  }
}
