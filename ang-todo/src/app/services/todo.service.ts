import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  //Si queremos poner algun modelo, lo cambiariamos por "any"
  todoList: AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) { }

  getTodoList() {
    this.todoList = this.firebasedb.list('titles');
    return this.todoList;
  }

  addTodo(title: string) {
    //isChecked se ha agregado para saber si las tareas estan hechas o no.
    this.todoList.push({
      title: title,
      isChecked: false
    });
  }

  updateTodo($key: string, flag: boolean) {
    // La funcion se encarga de actualizar la propiedad isChecked
    this.todoList.update($key, {isChecked: flag});
  }

  removeTodo($key:string) {
    this.todoList.remove($key);
  }
}
