import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:3001/todos'; // Update the URL to match your controller routes

  constructor(private http: HttpClient) {}

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`); // Add '/all' to the path
  }

  addTodo(task: { title: string; reminder: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, task); // Add '/add' to the path
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`); // Add the id to the path
  }
}
