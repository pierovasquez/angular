import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { RecetaInterface } from '../../models/Receta';
import { RecetaService } from '../../services/receta.service';
import {AuthService} from '../../services/auth.service';




@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  idReceta: string;
  idUsuarioL: string;

  receta: RecetaInterface = {
    id: '',
    titulo: '',
    descripcion: '',
    preparacion: '',
    ingredientes: '',
    temporada: '',
    fechaPublicacion: '',
    userId: '',
    userName: ''
  }


  constructor(
    private authservice: AuthService,
    private recetaservice: RecetaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onComprobarUserLogin();
    this.getDetailsReceta();
  }

  onComprobarUserLogin() {
    this.authservice.getAuth().subscribe(user =>{
      if(user) {
        this.idUsuarioL = user.uid;
      }
    })
  }

  getDetailsReceta() {
    this.idReceta = this.route.snapshot.params['id'];
    this.recetaservice.getOneReceta(this.idReceta).subscribe(receta => this.receta = receta)
  }

  onClickDelete() {
    if(confirm('Are you sure?')) {
      this.recetaservice.deleteReceta(this.receta);
      this.router.navigate(['/']);
    }
  }





}
