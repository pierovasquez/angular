import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//Service
import { ProductService } from '../../../services/product.service';

//Class
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService,
              private toastr: ToastrService) { }

  ngOnInit() {
    // Aqui tenemos que inicializar el arreglo productList con la funcion getProducts() que al llamar a la funcion,
    // recoge todos los datos de la tabla de firebase
    this.productService.getProducts();
    this.resetForm();
  }

  onSubmit(productForm: NgForm) {
    //Si la variable $key esta vacia, quiere decir que es un nuevo producto por lo que realizara el metodo insertProduct
    //Si la variable $key no esta vacia, llamara al metodo updateProduct
    if(productForm.value.$key == null) {
      this.productService.insertProduct(productForm.value);
      this.toastr.success('Successfull operation','Product added');
    } else{
      this.productService.updateProduct(productForm.value);
      this.toastr.success('Successfull operation','Product updated'); 
    }
    this.resetForm(productForm);
    
    
  }

  // Con el simbolo "?" indicamos que el opcional el productForm (el formulario)
  resetForm(productForm?: NgForm) {
    if(productForm != null) {
      productForm.reset();
      // Al ejecutar el codigo, se vacia todo lo que hay dentro del producto seleccionado. (name,category,etc)
      this.productService.selectedProduct = new Product();
    }
  }

}
