import { Component, OnInit } from '@angular/core';

// Service
import { TodoService } from '../../services/todo.service';
import { config } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoListArray: any[];

  constructor(private service: TodoService) { }

  ngOnInit() {
    this.service.getTodoList().
    snapshotChanges().
    subscribe(item => {
      this.todoListArray = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        console.log(x);
        x['$key'] = element.key;
        this.todoListArray.push(x);
      });
      //la funcion sort sirve para ordenar. Los elementos que son false los deja arriba y los true abajo.
      this.todoListArray.sort((a, b) =>{
        return a.isChecked - b.isChecked;
      })
    });
  }

  addTodo(itemTitle) {
    this.service.addTodo(itemTitle.value);
    itemTitle.value = null;
  }

  updateTodo($key:string, isChecked: boolean) {
    //todos los TODOs son por defecto false, entonces al poner ! indicamos que se sustituya por un true
    this.service.updateTodo($key,!isChecked);
  }

  deleteTodo($key: string) {
    if(confirm('Are you sure?')){
      this.service.removeTodo($key);
    }
  }
}
