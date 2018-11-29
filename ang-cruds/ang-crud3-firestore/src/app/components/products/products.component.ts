import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/product';
import { config } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [];

  editingProduct: Product;

  editing: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products =>{
      console.log(products);
      this.products = products;
    })
  }

  deleteProduct(event, product) {
    if(confirm('Are you sure?')){
      this.productService.deleteProduct(product);
    }
    
  }

  editProduct(event, product: Product) {
    this.editingProduct = product;
    this.editing = !this.editing;
  }
  
  updateProduct() {
    this.productService.updateProduct(this.editingProduct);
    this.editingProduct = {} as Product;
    this.editing = false;
  }
}
