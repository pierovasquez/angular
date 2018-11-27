import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //HTTP
 
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // constructor(private http: HttpClient) { } // Creamos una instancia del http dentro del constructor para poder usarlo

  // getUsers() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users') //Retorna una lista de usuarios de una API publica.
  // }

  constructor(private http: HttpClient) { }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

}
