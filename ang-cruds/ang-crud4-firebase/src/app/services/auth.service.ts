import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }


  loginGoogle() {
    return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
  }

  getAuth() {
    //En caso de estar logeado, devolvera todos los datos del usuario.
    return this.afAuth.authState.pipe(map(auth => auth))
  }

  logOut() {
    return this.afAuth.auth.signOut();
  }
}
