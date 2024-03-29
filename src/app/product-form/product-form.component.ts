import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Model';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  //buradaki addProduct ile service dosyasındaki addProduct farklı metotlar
  addProduct(name:string,price:number,isactive:boolean)
  {
    const p = new Product(
      0,
      name,
      price,
      isactive
      );

    this.productService.addProduct(p).subscribe(product=>{
      this.products.push(product); //önyüzdeki tabloya da eklemiş oldum
    });
  }

}
