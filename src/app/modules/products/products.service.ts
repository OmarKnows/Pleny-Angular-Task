import { Product } from 'src/app/shared/models/product.model';

export class ProductService {
  private products: Product[] = [
    new Product(
      'IPhone 9',
      'An Apple mobile which is nothing like apple.',
      477.85,
      'Apple',
      'Smartphone',
      94,
      4.69,
      11
    ),
    new Product(
      'IPhone 10',
      'An Apple mobile which is nothing like apple.',
      477.85,
      'Apple',
      'Smartphone',
      94,
      4.69,
      11
    ),
    new Product(
      'IPhone 11',
      'An Apple mobile which is nothing like apple.',
      477.85,
      'Apple',
      'Smartphone',
      94,
      4.69,
      11
    ),
  ];

  getProducts() {
    return this.products.slice();
  }
}
