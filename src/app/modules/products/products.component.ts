import { Component, OnDestroy, OnInit } from '@angular/core';
import { AgsmService } from 'agsm';
import { Subscription } from 'rxjs';
import { cartActionsService } from 'src/app/app-states/actions/cart/cart-action.service';
import { productActionsService } from 'src/app/app-states/actions/products/product-action.service';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  productsListSubscription: Subscription;
  cartSubscription: Subscription;

  products: Product[] = [];
  productCategories: string[] = [];
  title: string = 'Products';
  route: string = '';
  pageSize: number = 10;
  currentPage: number = 1;
  numberOfPages: number = 1;
  paginationArray: number[] = [];
  total: number = 0;
  cartID: number = 0;

  constructor(
    private agsm: AgsmService,
    private productActions: productActionsService,
    private productsService: ProductService,
    private cartService: cartActionsService
  ) {}

  ngOnInit(): void {
    this.cartSubscription = this.agsm
      .stateSelector((state) => state.cart)
      .subscribe((stateValue) => {
        this.cartID = stateValue.cart.carts[0].id;
      });

    this.productsListSubscription = this.agsm
      .stateSelector((state) => state.productsList)
      .subscribe((stateValue) => {
        const { productsResponse } = stateValue;
        const { products, total } = productsResponse;
        this.products = products;
        this.numberOfPages = Math.ceil(total / this.pageSize);
        this.paginationArray = Array(this.numberOfPages)
          .fill(0)
          .map((_x, i) => i);
      });

    this.productActions.getProducts(
      this.pageSize,
      this.currentPage * this.pageSize - this.pageSize
    );

    this.productsService.getProductCategories().subscribe((response) => {
      this.productCategories = response;
    });
  }

  ngOnDestroy(): void {
    this.productsListSubscription.unsubscribe();
  }

  filter(event: any) {
    this.title = event.target.value;

    if (event.target.value === 'Products') {
      this.productActions.getProducts(
        this.pageSize,
        this.currentPage * this.pageSize - this.pageSize
      );
    } else {
      this.route = '/ ' + event.target.value;
      this.productActions.filterProducts(event.target.value);
    }
  }

  addToCart(productId: number) {
    //console.log(productId);
    this.cartService.addToCart(this.cartID, productId, 1);
  }

  paginate(event: any) {
    this.currentPage = event.target.value;
    this.productActions.getProducts(
      this.pageSize,
      this.currentPage * this.pageSize - this.pageSize
    );
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
