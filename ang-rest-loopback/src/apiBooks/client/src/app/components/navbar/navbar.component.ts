import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) { }

  public app_name = 'Books Store';

  ngOnInit() {
  }

  onLogout(): void {
    this.authService.logoutUser();
  }
}
