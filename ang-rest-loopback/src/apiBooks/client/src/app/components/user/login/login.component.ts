import { UserInterface } from './../../../models/user-interface';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: UserInterface = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    return this.authService.loginUser(this.user.email, this.user.password)
    .subscribe( data => {
      this.authService.setUser(data.user);
      const token = data.id;
      this.authService.setToken(token);
      this.router.navigate(['user/profile']);
    },
    error => console.log('Error')
    );
  }

}
