import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { RecetaInterface } from '../../models/Receta'
import { RecetaService } from '../../services/receta.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  idReceta:string;
  receta : RecetaInterface = {
    id: '',
    titulo: '',
    descripcion: '',
    preparacion: '',
    ingredientes: '', 
    temporada: '',
    fechaPublicacion: '',
    userId: '',
    userName: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recetaservice: RecetaService

  ) { }

  ngOnInit() {
    this.getDetallesReceta();
  }

  getDetallesReceta() {
    //snapshot.params -> recoge el valor insertado en la url donde indicamos que ira el id. /edit/333 -> mostrara 333
    this.idReceta = this.route.snapshot.params['id'];
    this.recetaservice.getOneReceta(this.idReceta).subscribe( receta => this.receta = receta);
  }

  onModificarReceta({value}:{value:RecetaInterface}) {
    value.id = this.idReceta;
    this.recetaservice.updateReceta(value);
    this.router.navigate(['/details/' + this.idReceta]);
  }

}
