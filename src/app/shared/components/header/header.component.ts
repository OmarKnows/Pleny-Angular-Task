import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AgsmService } from 'agsm';
import { Subscription } from 'rxjs';
import { productActionsService } from 'src/app/app-states/actions/products/product-action.service';
import { cartActionsService } from 'src/app/app-states/actions/cart/cart-action.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  private authSubscription: Subscription;
  private cartSubscription: Subscription;

  userId = 0;
  cartItems = 0;

  constructor(
    private agsm: AgsmService,
    private productActions: productActionsService,
    private cartActions: cartActionsService
  ) {}

  ngOnInit(): void {
    this.authSubscription = this.agsm
      .stateSelector((state) => state.user)
      .subscribe((stateValue) => {
        this.isAuthenticated = !!stateValue;
        this.userId = stateValue.id;
      });

    this.cartSubscription = this.agsm
      .stateSelector((state) => state.cart)
      .subscribe((stateValue) => {
        this.cartItems = stateValue.cart.carts[0].totalQuantity;
      });

    this.cartActions.getUserCart(this.userId);
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    this.productActions.searchProducts(form.value.search);
  }
}
