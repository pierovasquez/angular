import { Component, OnInit } from '@angular/core';

import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks()
    .snapshotChanges()
    .subscribe(item => {
      this.tasks = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        console.log(x);
        x['$key'] = element.key;
        this.tasks.push(x as Task)
      });
    });
  }

  deleteTask($key:string) {
    if(confirm('Are you sure?')) {
      this.taskService.deleteTask($key);
    }
    return;
  }

  updateTask(task: Task) {
    
  }
}
