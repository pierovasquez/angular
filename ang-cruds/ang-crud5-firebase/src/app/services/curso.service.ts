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
    this.cursos = afs.collection('cursos').valueChanges();
  }

  getCursos() {
    return this.cursos;
  }
}
