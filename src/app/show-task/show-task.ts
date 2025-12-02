import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-task.html',
  styleUrl: './show-task.css',
})
export class ShowTask implements OnInit {

  tasks: string[] = ['task 1', 'task 2', 'task 3'];

  taskservice: TaskService = inject(TaskService);

  ngOnInit() {
    this.taskservice.CreateTask.subscribe(value => {
      this.tasks.push(value);
    });
  }
}
