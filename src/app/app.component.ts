import { Component } from '@angular/core';
import { Model } from './Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SocialApp';
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
