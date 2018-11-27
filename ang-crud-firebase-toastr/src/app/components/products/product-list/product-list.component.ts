import { Component, OnInit } from '@angular/core';

//Service
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // Declaramos que productList sera un array de Productos.
  productList: Product[]

  //Declaramos en el constructor el servicio y el toastr
  constructor(private productService: ProductService,
              private toastr: ToastrService) { }

  ngOnInit() {
    // Aqui ejecutaremos el metodo que se encargue de traer todos los datos de la base de datos Firebase
    // snapshotChanges -> Nos traemos todos los cambios realizados en la base de datos.
    // subscribe -> nos trae los items guardados en nuestra base de datos por tuplas.
    this.productService.getProducts()
      .snapshotChanges()
      .subscribe(item => {
        this.productList = []; // Definimos el productList como vacio para poder iniciar a meter los datos en el
        item.forEach(element =>{ // Hacemos un foreach para obtener todas las propiedades del item en la variable element
          let x = element.payload.toJSON(); //Muestra  category -> bebidas, location -> USA, etc.
          console.log(x);
          x["$key"] = element.key; // Almacenamos la clave del elemento en una propiedad $key que creamos nosotros. Cuando estamos eliminando o actualizando, necesitamos la clave $key
          this.productList.push(x as Product) // Indicamos que el elemento x es de tipo Product
        });
      });
  }

  onEdit(product: Product) {
    // Con el codigo de abajo, al tener puesto el [(ngModel)], cuando declaramos el codigo de abajo, los inputs se rellenaran con los datos del producto seleccionado
    // El problema de estoes que a la hora de cambiar los datos en el input tambien se cambiarian en la base de datos.

    //this.productService.selectedProduct = product;

    // Aqui creamos una nueva copia del producto en un nuevo elemento para que la aplicacion no tenga el doble enlace de datos.
    this.productService.selectedProduct = Object.assign({},product)
  }

  onDelete($key: string) {
    // Esta funcion llama al metodo deleteProduct del servicio productService.
    this.productService.deleteProduct($key);
    this.toastr.success('Successfull Operation', 'Product deleted');
  }

}
