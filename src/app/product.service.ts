import { Injectable } from '@angular/core';
import { Model, Product } from './Model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  model = new Model();

  constructor() { }

  //products bilgilerini dondurecek bir metot olsun
  getProducts(){
    return this.model.products;
  }

  addProduct(product: Product){
    this.model.products.push(product);
  }
}
