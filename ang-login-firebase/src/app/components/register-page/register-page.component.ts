import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  // Habilitar el metodo de incio de sesion por correo electronico en Firebase.
  // Gracias al data binding, obtenemos en las siguientes variables los valores incluidos en los inputs. 
  public email:string;
  public password:string;

  constructor(
    private service: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmitAddUser() {
    this.service.registerUser(this.email,this.password)
    .then ( (res) =>{
      console.log('REGISTRADO');
      console.log(res);
      // Para utilizar el navigate tenemos que importar el Router.
      this.router.navigate(['/private'])
    })
    .catch( (err) =>{
      console.log(err);
    })
  }

}
