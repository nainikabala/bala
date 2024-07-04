import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  updateTask(selectedTask: any) {
    throw new Error('Method not implemented.');
  }

    private apiUrl = "http://localhost:8092/api/company/save";
  constructor(private httpClient:HttpClient) { }

  createTask(newTask: Task):Observable<Task>{
    return this.httpClient.post<Task>(this.apiUrl,newTask)
  }

  getAllTask():Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.apiUrl)
  }

}
