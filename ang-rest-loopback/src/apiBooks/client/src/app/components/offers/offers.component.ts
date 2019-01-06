import { BookInterface } from './../../models/book-interface';
import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  private books: BookInterface;

  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
    this.dataApi.getOffers()
    .subscribe((data: BookInterface) => (this.books = data));
  }

}
