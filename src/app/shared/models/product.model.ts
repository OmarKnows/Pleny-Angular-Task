export class Product {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public brand: string,
    public category: string,
    public stock: number,
    public rating: number,
    public reviews: number
  ) {}
}
