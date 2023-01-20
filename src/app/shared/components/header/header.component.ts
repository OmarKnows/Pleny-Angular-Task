import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AgsmService } from 'agsm';
import { Subscription } from 'rxjs';
import { productActionsService } from 'src/app/app-states/actions/products/product-action.service';
import { cartActionsService } from 'src/app/app-states/actions/cart/cart-action.service';
import { authActionsService } from 'src/app/app-states/actions/auth/auth-action.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private authSubscription: Subscription;
  private cartSubscription: Subscription;

  isAuthenticated: boolean = false;
  userId: number = 0;
  cartItems: number = 0;

  constructor(
    private agsm: AgsmService,
    private productActions: productActionsService,
    private authActions: authActionsService,
    private cartActions: cartActionsService
  ) {}

  ngOnInit(): void {
    //if (this.isAuthenticated)
    this.authSubscription = this.agsm
      .stateSelector((state) => state.user)
      .subscribe((stateValue) => {
        this.isAuthenticated = !!stateValue;
        this.userId = stateValue.id;
        this.cartActions.getUserCart(this.userId);
      });

    //if (this.isAuthenticated) {
    this.cartSubscription = this.agsm
      .stateSelector((state) => state.cart)
      .subscribe((stateValue) => {
        this.cartItems = stateValue.cart.carts[0].totalQuantity;
      });
    //}
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    this.productActions.searchProducts(form.value.search);
  }

  logout() {
    this.authActions.logout();
  }
}
