import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../../services/data-api.service'
import { BookInterface } from './../../../models/book-interface';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {

  private books: BookInterface;

  constructor(private dataApiService: DataApiService) { }

  ngOnInit() {
  }

  getListBooks() {
    this.dataApiService.getAllBooks().subscribe()
  }
}
