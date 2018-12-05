import { Component, OnInit } from '@angular/core';
import { RecetaInterface } from '../../models/Receta';
import { AuthService } from '../../services/auth.service';
import { RecetaService } from '../../services/receta.service';
import { Router} from '@angular/router'


@Component({
  selector: 'app-nueva-receta',
  templateUrl: './nueva-receta.component.html',
  styleUrls: ['./nueva-receta.component.scss']
})
export class NuevaRecetaComponent implements OnInit {

  receta:RecetaInterface = {
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
    private router: Router,
    private recetaservice: RecetaService,
    private authservice: AuthService
  ) { }

  ngOnInit() {
  }

  onGuardarReceta({value}: {value:RecetaInterface}) {
    value.fechaPublicacion = (new Date()).getTime();
    this.authservice.getAuth().subscribe( user => {
      value.userId = user.uid;
      value.userName = user.displayName;
      this.recetaservice.addNewReceta(value);
    });
    this.router.navigate(['/']);
  }

}
