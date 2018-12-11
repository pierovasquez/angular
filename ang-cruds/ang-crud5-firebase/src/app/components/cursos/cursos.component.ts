import { Component, OnInit } from '@angular/core';
import { CursoInterface } from '../../models/curso'
import { CursoService } from '../../services/curso.service'


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: CursoInterface[];

  editState: boolean = false;
  cursoToEdit: CursoInterface;

  constructor(private cursoservice: CursoService) { }

  ngOnInit() {
    this.cursoservice.getCursos().subscribe( cursos => {
      console.log(cursos);
      this.cursos = cursos;
    });
  }

  clearState() {
    // Al cerrar la ventana de edit, volvemos a marcar el editstate y vaciamos el cursoToEdit
    this.editState = false;
    this.cursoToEdit = null;
  }

  editCurso(event, curso: CursoInterface) {
    this.editState = true;
    this.cursoToEdit = curso;
  }



  // Form methods
  onDeleteCurso(event, curso:CursoInterface) {
    this.cursoservice.deleteCurso(curso);
  }

  onUpdateCurso(curso:CursoInterface) {
    this.cursoservice.updateCurso(curso);
  }
}
