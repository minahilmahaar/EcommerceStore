import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrls: ['./new-task.css'] 
})
export class NewTask {
  newTask: string = "";

  constructor(private taskService: TaskService) {}

  addTask() {
    if (!this.newTask.trim()) return;

    this.taskService.OnCreateTask(this.newTask);

    this.newTask = ""; 
  }
}
