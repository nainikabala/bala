import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule,FormsModule,
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  apiUrl: any;

  constructor(private taskService:TaskService){}

  newTask:Task = {name:"",location:"",persons:""};
  tasks:Task[] = [];
  title = 'myApp';
  name = '';
  pendingItems: any[] = [];
  i: number | null = null;
  selectedTask: Task | null = null;

  ngOnInit(): void {
    this.getAllTaks();
  }

  createTask():void{
    this.taskService.createTask(this.newTask).subscribe((createdTask)=>{
      this.newTask = {name:"",location:"",persons:""};
    })
  }

  getAllTaks(){
    this.taskService.getAllTask().subscribe((tasks)=>{
      this.tasks = tasks
    })
  }

  selectTask(task: Task): void {
    this.selectedTask = { ...task };
    }


   


}
