import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; //Añadimos el servicio creado.
import { Observable } from 'rxjs' //Para desplegar los resultados, se utiliza el Observable
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('10000ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
// export class UsersComponent implements OnInit {

//   users$: Object;

//   constructor(private data: DataService) { }  //Creamos una instancia del servicio

//   ngOnInit() { //Esta funcion se ejecuta cuando el compoente ser carga
//     this.data.getUsers().subscribe( //Utilizamos el getUsers del servicio data
//       data => this.users$ = data //Añadimos al objeto users$ el resultado dado por la API
//     );
//   }

// }
export class UsersComponent implements OnInit {

  users$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data 
    );
  }

}