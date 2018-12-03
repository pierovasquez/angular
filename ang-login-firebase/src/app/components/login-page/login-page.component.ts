import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  private email:string;
  private password:string;

  constructor(
    public service: AuthService,
    public router: Router,
    public flashMessages : FlashMessagesService
  ) { }

  ngOnInit() {
  }


  onSubmitLogin() {
    this.service.loginUser(this.email,this.password)
    .then( (response) =>{
      this.flashMessages.show('Usuario logeado correctamente',
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/private']);
    })
    .catch( (err) =>{
      console.log(err);
      this.flashMessages.show(err.message,
      {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['/login'])
    })
  }

  onClickLoginGoogle() {
    this.service.loginGoogle()
    .then( (res) =>{
      this.router.navigate(['private']);
    }).catch( err =>{
      console.log(err.message);
    })
  }
}
