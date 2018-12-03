import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private service: AuthService
  ) {}

  // Segun las versiones que tienes, deberas importarlos de diferentes formas o utilizar nuevas funciones como pipe(), etc.
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.service.afAuth.authState
    .pipe(take(1))
    .pipe(map(authState => !! authState))
    .pipe(tap( authenticated => {
      if (!authenticated) {
        this.router.navigate(['/login']);
      }
    }));
  }
}
