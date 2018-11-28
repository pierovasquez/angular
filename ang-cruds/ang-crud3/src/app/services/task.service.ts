import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList: AngularFireList<any>;

  selectedTask: Task = new Task();
  constructor(private firebasedb: AngularFireDatabase) { }

  getTasks() {
    this.taskList = this.firebasedb.list('tasks');
    return this.taskList;
  }

  insertTask(task: Task) {
    this.taskList.push({
      title: task.title,
      description: task.description
    });
  }

  updateTask(task: Task) {
    this.taskList.update(task.$key, {
      title: task.title,
      description: task.description
    });
  }

  deleteTask($key:string) {
    this.taskList.remove($key);
  }
}
