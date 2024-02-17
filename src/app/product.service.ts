import { Injectable } from '@angular/core';
import { Model, Product } from './Model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //sorgularımı göndermek istediğim url
  baseUrl: string = 'http://localhost:5000/';
  model = new Model();

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'api/Products');
  }

  getProductById(id: number){
     return this.model.products.find(i => i.productId==id);
  }

  addProduct(product: Product) : Observable<Product>{
    return this.http.post<Product>(this.baseUrl + 'api/Products',product);
  }

  updateProduct(product: Product) : Observable<Product>{
    return this.http.put<Product>(this.baseUrl + 'api/Products/' + product.productId, product);
  }

  saveProduct(product: Product){
    //yeni bir ürün ekleyeceksem id bilgisi gelmez otomatik olusur
    if(product.productId == 0){
      //add işlemi
      this.model.products.push(product);
    }
    else{
      //update işlemi
      const p = this.getProductById(product.productId);
      p.name = product.name;
      p.price = product.price;
      p.isActive = product.isActive;
    }
  }

  deleteProduct(product: Product){
    return this.model.products = this.model.products.filter(x=> x!==product)
  }
}
