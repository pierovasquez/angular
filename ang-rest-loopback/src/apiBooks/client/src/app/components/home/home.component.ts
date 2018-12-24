import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { BookInterface} from '../../models/book-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private books: BookInterface;

  constructor(
    private dataApi: DataApiService,
    ) { }

  ngOnInit() {
    this.getListBooks();
  }

  getListBooks() {
    this.dataApi.getAllBooks()
    .subscribe((books: BookInterface) => {
      this.books = books;
      console.log(books); });
  }

}
