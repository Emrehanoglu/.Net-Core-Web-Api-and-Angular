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

  getProductById(id: number){
     return this.model.products.find(i => i.id==id);
  }

  saveProduct(product: Product){
    //yeni bir ürün ekleyeceksem id bilgisi gelmez otomatik olusur
    if(product.id == 0){
      product.id = this.getProducts().length+1
      //add işlemi
      this.model.products.push(product);
    }
    else{
      //update işlemi
      const p = this.getProductById(product.id);
      p.name = product.name;
      p.price = product.price;
      p.isActive = product.isActive;
    }
  }
}
