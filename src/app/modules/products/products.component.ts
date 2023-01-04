import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    console.log(this.products);
  }
}
