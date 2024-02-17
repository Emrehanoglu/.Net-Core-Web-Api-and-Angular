export class Model {
  products: Array<Product>;

  /**
   *
   */
  constructor() {
    this.products = [
      new Product(1,'Samsung S5',5000,false),
      new Product(2,'Samsung S6',6000,true),
      new Product(3,'Samsung S7',7000,false),
      new Product(4,'Samsung S8',8000,false),
      new Product(5,'Samsung S9',9000,true)
    ];
  }
}

export class Product{
  productId: number;
  name: string;
  price: number;
  isActive: boolean;

  constructor(productId,name,price,isActive){
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.isActive = isActive;
  }
}
