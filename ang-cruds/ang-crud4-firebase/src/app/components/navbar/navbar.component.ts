import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private userName:string;
  private userEmail:string;
  private userPicture:string;
  private userId:string;
  private isLogin:boolean;


  constructor(
    private service: AuthService
  ) { }

  ngOnInit() {
    this.service.getAuth().subscribe( auth => {
      if(auth) {
        this.isLogin = true;
        this.userName = auth.displayName;
        this.userPicture = auth.photoURL;
        this.userEmail = auth.email;
        this.userId = auth.uid;
      }else {
        this.isLogin = false;
      }
    })
  }
  
  onLogOut() {
    this.service.logOut();
  }
}
