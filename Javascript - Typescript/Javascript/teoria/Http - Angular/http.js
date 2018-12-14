//book.service.ts

import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from '@angular/Observable';
import { IBook } from './ibook';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BookService {
    constructor(private _http: Http) {}

    getBooks(): Observable<IBook[]> {
        return this._http
                .get('api/books.json')
                .map((respose: Response) => <IBook[]> response.json())
                .do( data => console.log(data))
                .catch(this.handleError)
    }

    private handleError(error: Response) {
        console.error(error);
        let message = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(message);
    }
}


// COMPONENT

export class BookListComponent implements onInit {
    books: Ibook[];
    favoriteMessage:string ="";
    imageWidth: number =100;
    showImage: boolean = true;
    booksInStock:number = 2;
    errorMessage: string;

    constructor(private _bookservice: BookService) {}

    ngOnInit(){
        this.getBooks();
    }

    getBooks() {
        this._bookservice.getBook()
         .subscribe(
             response => this.books =response,
             error => this.errorMessage = //<any> error
         );
    }



}

//app.module.ts
import { HttpModule } from '@angular/http';
//imports httpModule
