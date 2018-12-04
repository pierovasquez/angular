import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClickLoginGoogle() {
    return this.service.loginGoogle()
    .then( (res) =>{
      console.log(res);
      this.router.navigate(['/admin']);
    }).catch(err => console.log(err.message));
  }
}
