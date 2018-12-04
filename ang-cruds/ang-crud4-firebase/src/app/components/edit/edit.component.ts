import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  idReceta:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    //snapshot.params -> recoge el valor insertado en la url donde indicamos que ira el id. /edit/333 -> mostrara 333
    this.idReceta = this.route.snapshot.params['id']
  }

}
