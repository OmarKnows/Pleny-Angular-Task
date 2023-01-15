import { Component, OnDestroy, OnInit } from '@angular/core';
import { AgsmService } from 'agsm';
import { Subscription } from 'rxjs';
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

  products: Product[] = [];
  productCategories: string[] = [];
  title: string = 'Products';
  route: string = '';

  constructor(
    private agsm: AgsmService,
    private productActions: productActionsService,
    private productsService: ProductService
  ) {}

  ngOnInit(): void {
    this.productsListSubscription = this.agsm
      .stateSelector((state) => state.productsList)
      .subscribe((stateValue) => {
        const { productsResponse } = stateValue;
        const { products, limit, skip, total } = productsResponse;
        this.products = products;
      });

    this.productActions.getproducts();
    this.productsService.getProductCategories().subscribe((response) => {
      this.productCategories = response;
    });
  }

  ngOnDestroy(): void {
    this.productsListSubscription.unsubscribe();
  }

  filter(event: any) {
    console.log(event.target.value);
    this.title = event.target.value;

    if (event.target.value === 'Products') {
      this.productActions.getproducts();
    } else {
      this.route = '/ ' + event.target.value;
      this.productActions.filterProducts(event.target.value);
    }
  }
}
