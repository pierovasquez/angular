import { Injectable } from '@angular/core';
import {RecetaInterface} from '../models/Receta';
import { AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  recetaCollection: AngularFirestoreCollection<RecetaInterface>;
  recetaDoc: AngularFirestoreDocument<RecetaInterface>;
  recetas : Observable<RecetaInterface[]>;
  receta: Observable<RecetaInterface>;
  
  constructor(
    private afs: AngularFirestore
  ) { 
    //Siempre que nuestro servicio inicie, añadira todas las recetas de la base de datos en nuestra recetaCollection
    this.recetaCollection = this.afs.collection('recetas', ref => ref);

    this.recetas = this.recetaCollection.snapshotChanges()
    .pipe(map(actions => {
      return actions.map(a =>{
        const data = a.payload.doc.data() as RecetaInterface;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getAllRecetas() {
    return this.recetas;
  }

  getOneReceta(idReceta: string) {
    this.recetaDoc = this.afs.doc<RecetaInterface>(`recetas/${idReceta}`);
    this.receta = this.recetaDoc.snapshotChanges().pipe(map( action => {
      if(action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as RecetaInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
    return this.receta;
  }

  addNewReceta(receta: RecetaInterface) {
    this.recetaCollection.add(receta);
  }

  deleteReceta(receta: RecetaInterface) {
    this.recetaDoc = this.afs.doc(`recetas/${receta.id}`);
    this.recetaDoc.delete();
  }

  updateReceta(receta: RecetaInterface) {
    this.recetaDoc = this.afs.doc(`recetas/${receta.id}`);
    this.recetaDoc.update(receta);
  }

  
}
