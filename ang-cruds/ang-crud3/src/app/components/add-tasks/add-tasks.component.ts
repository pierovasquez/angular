import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// Class
import { Task } from 'src/app/models/task';
//Service
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks();
    this.resetForm();
  }

  onSubmit(taskForm: NgForm) {
    if(taskForm.value.$key == null) {
      console.log(taskForm);
      this.taskService.insertTask(taskForm.value);
    }else{
      this.taskService.updateTask(taskForm.value);
    }
    this.resetForm(taskForm);
  }

  resetForm(taskForm?: NgForm) {
    if(taskForm != null) {
      taskForm.reset();
      this.taskService.selectedTask = new Task();
    }
  }
}
