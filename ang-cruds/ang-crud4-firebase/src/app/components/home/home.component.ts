import { Component, OnInit } from '@angular/core';
import {RecetaService} from '../../services/receta.service'
import { RecetaInterface } from '../../models/Receta'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recetas: RecetaInterface[];

  constructor(private recetaservice: RecetaService) { }

  ngOnInit() {
    this.todasRecetas();
  }

  todasRecetas() {
    this.recetaservice.getAllRecetas().subscribe(recetas => this.recetas = recetas);
  }
}
