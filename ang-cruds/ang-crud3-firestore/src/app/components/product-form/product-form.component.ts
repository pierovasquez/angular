import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  product = {} as Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  addProduct() {
    if(this.product.name !== '' && this.product.description !== '' && this.product.price !== 0){
      this.productService.addProduct(this.product);
    }
  }

}
