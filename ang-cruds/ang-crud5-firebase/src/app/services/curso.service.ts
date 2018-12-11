import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { CursoInterface } from '../models/curso'
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  cursosCollection: AngularFirestoreCollection<CursoInterface>;
  cursoDoc: AngularFirestoreDocument<CursoInterface>;
  cursos: Observable<CursoInterface[]>;



  constructor(public afs: AngularFirestore) { 
    // this.cursos = afs.collection('cursos').valueChanges();
    this.cursosCollection = afs.collection<CursoInterface>('cursos', ref => ref.orderBy('fecha','desc'));
    this.cursos = this.cursosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as CursoInterface;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: CursoInterface) {
    console.log("New Course");
    this.cursosCollection.add(curso);
  }

  deleteCurso(curso:CursoInterface) {
    this.cursoDoc = this.afs.doc(`cursos/${curso.id}`)
    this.cursoDoc.delete();
  }

  updateCurso(curso:CursoInterface) {
    this.cursoDoc = this.afs.doc(`cursos/${curso.id}`);
    this.cursoDoc.update(curso);
  }
}
