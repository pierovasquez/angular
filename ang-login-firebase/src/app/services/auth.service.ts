import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { map, filter, switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  registerUser(email: string, password: string) {
    //TODO: Promesas
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then ( userData => resolve(userData),
      err => reject (err));
    });
  }

  loginUser(email: string, password: string) {
    
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then ( userData => resolve(userData),
      err => reject (err));
    });
  }

  getAuth() {
    // Retorna si esta logeado o no algun usuario.
    // Se utiliza pipe en las versiones 6 o superiores de Angular
    return this.afAuth.authState.pipe(map( auth => auth));
    
  }

  logOut() {
    return this.afAuth.auth.signOut();
  }

  loginGoogle() {
    return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
  }

  loginFacebook() {
    return this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
  }
}
