import { Product } from 'src/app/shared/models/product.model';

export class ProductService {
  private products: Product[] = [
    new Product(
      1,
      'iPhone 9',
      'An apple mobile which is nothing like apple',
      549,
      12.96,
      4.69,
      94,
      'Apple',
      'smartphones',
      '../../../assets/product_thumbnail.png',
      ['...', '...', '...']
    ),
    new Product(
      1,
      'iPhone 9',
      'An apple mobile which is nothing like apple',
      549,
      12.96,
      4.69,
      94,
      'Apple',
      'smartphones',
      '../../../assets/product_thumbnail.png',
      ['...', '...', '...']
    ),
    new Product(
      1,
      'iPhone 9',
      'An apple mobile which is nothing like apple',
      549,
      12.96,
      4.69,
      94,
      'Apple',
      'smartphones',
      '../../../assets/product_thumbnail.png',
      ['...', '...', '...']
    ),
    new Product(
      1,
      'iPhone 9',
      'An apple mobile which is nothing like apple',
      549,
      12.96,
      4.69,
      94,
      'Apple',
      'smartphones',
      '../../../assets/product_thumbnail.png',
      ['...', '...', '...']
    ),
    new Product(
      1,
      'iPhone 9',
      'An apple mobile which is nothing like apple',
      549,
      12.96,
      4.69,
      94,
      'Apple',
      'smartphones',
      '../../../assets/product_thumbnail.png',
      ['...', '...', '...']
    ),
    new Product(
      1,
      'iPhone 9',
      'An apple mobile which is nothing like apple',
      549,
      12.96,
      4.69,
      94,
      'Apple',
      'smartphones',
      '../../../assets/product_thumbnail.png',
      ['...', '...', '...']
    ),
  ];

  productCategories: string[] = [
    'smartphones',
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
    'home-decoration',
    'furniture',
    'tops',
    'womens-dresses',
    'womens-shoes',
    'mens-shirts',
    'mens-shoes',
    'mens-watches',
    'womens-watches',
    'womens-bags',
    'womens-jewellery',
    'sunglasses',
    'automotive',
    'motorcycle',
    'lighting',
  ];

  getProducts() {
    return this.products.slice();
  }

  getProductCategories() {
    return this.productCategories.slice();
  }
}
