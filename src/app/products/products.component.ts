import { Component, OnInit } from '@angular/core';
import { Model } from '../Model';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model = new Model();

  //categoryName bilgisini dondurecek bir metot olsun
  getName(){
    return this.model.categoryName
  }
  //products bilgilerini dondurecek bir metot olsun
  getProducts(){
    return this.model.products;
  }

}
