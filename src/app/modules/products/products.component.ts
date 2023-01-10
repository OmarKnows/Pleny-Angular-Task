import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  productCategories: string[] = [];

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.productsService.fetchProducts().subscribe((response) => {
      this.products = response;
    });

    this.productsService.getProductCategories().subscribe((response) => {
      this.productCategories = response;
    });
  }
}
