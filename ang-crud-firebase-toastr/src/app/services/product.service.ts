import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //el productlist es un array que recibira los datos de AngularFireList y ser a de cualquier tipo.
  productList: AngularFireList<any>;

  // En esta clase se almacenara temporalmente un solo producto. Por ejemplo, si se selecciona un solo producto del
  // array, este se almacenara en el selectProduct
  selectedProduct: Product = new Product();
  constructor(private firebase: AngularFireDatabase) { }

  getProducts() {
    //Aqui se rellena el array productList y todas los datos se guardaran en una coleccion llamada products
    return this.productList = this.firebase.list('products');
  }

  insertProduct(product: Product) {
    //Recibe el objeto para insertarlo
    this.productList.push({
      name:product.name,
      category: product.category,
      location: product.location,
      price: product.price
    });
  }

  updateProduct(product: Product) {
    //El metodo update recibe dos parametros -> La clave del producto y el objeto.
    this.productList.update(product.$key, {
      name:product.name,
      category: product.category,
      location: product.location,
      price: product.price
    });
  }

  deleteProduct($key: string) {
    //Esta funcion recibe la clave del producto.
    this.productList.remove($key);
  }
}
