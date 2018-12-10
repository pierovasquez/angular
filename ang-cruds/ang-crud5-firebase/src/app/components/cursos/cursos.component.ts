import { Component, OnInit } from '@angular/core';
import { CursoInterface } from '../../models/curso'
import { CursoService } from '../../services/curso.service'


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  constructor(private cursoservice: CursoService) { }

  ngOnInit() {
    this.cursoservice.getCursos().subscribe( cursos => {
      console.log(cursos)
    });
  }

}
