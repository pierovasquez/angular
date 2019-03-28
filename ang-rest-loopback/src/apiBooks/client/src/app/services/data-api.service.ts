import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

import { BookInterface } from '../models/book-interface';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  constructor(private _http: HttpClient, private authService: AuthService) { }

  books: Observable<any>;
  book: Observable<any>;

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  getAllBooks() {
    const url_api = `http://localhost:3000/api/books`;
    return this._http.get(url_api);
  }
  getNotOffers() {
    const url_api = `http://localhost:3000/api/books?filter[where][oferta]=0`;
    return this._http.get(url_api);
  }

  getBookById(id: string) {
    const url_api = `http://localhost:3000/api/books/${id}`;
    this.book = this._http.get(url_api);
    return this.book;
  }

  getOffers() {
    const url_api = `http://localhost:3000/api/books?filter[where][oferta]=1`;
    this.books = this._http.get(url_api);
    return this.books;
  }

  saveBook(book: BookInterface) {
    // TODO: obtener token
    // TODO: not null
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/books?access_token=${token}`;
    return this._http
      .post<BookInterface>(url_api, book, { headers: this.headers })
      .pipe(map(data => data));
  }

  updateBook(book: BookInterface) {
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/books?access_token=${token}`;
    return this._http
      .put<BookInterface>(url_api, book, { headers: this.headers })
      .pipe(map(data => data));
  }

  deleteBook(id: string) {
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/books?access_token=${token}`;
    return this._http
      .delete<BookInterface>(url_api, { headers: this.headers })
      .pipe(map(data => data));
  }
}
