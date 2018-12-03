import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLogin: boolean;
  public userName: string;
  public email: string;


  constructor(
    private service: AuthService
  ) { }

  ngOnInit() {
    //ngOnInit es el primer metodo que se ejecuta del componente.
    this.service.getAuth().subscribe( auth =>{
      if(auth) {
        this.isLogin = true;
        this.userName = auth.displayName;
        this.email = auth.email;
      }else {
        this.isLogin = false;
      }
    })
  }

  onClickLogOut() {
    this.service.logOut();
  }
}
