import { Component, OnInit } from '@angular/core';
import { UserInterface } from './../../../models/user-interface';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private user: UserInterface = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegister(): void {
    this.authService.registerUser(this.user.name, this.user.email, this.user.password)
      .subscribe( user => {
        this.authService.setUser(user);
        const token = user.id;
        this.authService.setToken(token);
        this.router.navigate(['user/profile']);
      });
  }
}
