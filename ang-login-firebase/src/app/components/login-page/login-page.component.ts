import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
    public router: Router
  ) { }

  ngOnInit() {
  }


  onSubmitLogin() {
    this.service.loginUser(this.email,this.password)
    .then( (response) =>{
      this.router.navigate(['/private']);
    })
    .catch( (err) =>{
      console.log(err);
      this.router.navigate(['/login'])
    })
  }
}
