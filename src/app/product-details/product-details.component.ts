import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Model';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  updateProduct(id: number, name:string,price:number,isactive:boolean)
  {
    const p = new Product(
      id,
      name,
      price,
      isactive
      );

    this.productService.saveProduct(p);
    //güncelleme işleminden sonra parametreyi sıfırlayalım ki ekrandan form gitmiş olsun.
    this.product = null;
  }
}
