import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsCollection: AngularFirestoreCollection<Product>;

  products: Observable<Product[]>;

  productDoc: AngularFirestoreDocument<Product>;

  constructor(private db: AngularFirestore) { 
    //this.db.collection('products').valueChanges(); -> nos devuelve los productos de la tabla en forma de array. Solo nos muestra los datos sin el id.
    //this.products = this.db.collection('products').valueChanges();

    //Si queremos recoger el id guardado en la base de datos firestore y asignarlo a nuestros productos ->
    this.productsCollection =  this.db.collection('products');
    //snapshotChanges() -> tra una nueva actualizacion de los datos cuando estos cambian.
    //pipe() ->
    this.products = this.productsCollection.snapshotChanges()
    .pipe(map(actions => {
      console.log('%c Actions', 'color: orange;');
      console.log(actions);
      return actions.map(a =>{
        console.log('%c a', 'color: orange;');
        console.log(a);
        const data = a.payload.doc.data() as Product;
        console.log('%c data', 'color: orange;');
        console.log(data);
        data.id = a.payload.doc.id;
        return data;
      });
    }));


  }

  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    this.productsCollection.add(product);
  }

  deleteProduct(product: Product) {
    //this.db.doc(`products/${product.id}`) -> Sirve para seleccionar el id del objeto product
    this.productDoc = this.db.doc(`products/${product.id}`);
    this.productDoc.delete();
  }

  updateProduct(product: Product) {
    this.productDoc = this.db.doc(`products/${product.id}`);
    this.productDoc.update(product);
  }
}
