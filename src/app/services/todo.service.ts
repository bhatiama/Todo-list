import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from './../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl = 'http://localhost:3000/todo';
  todos: Todo[];
  constructor(private http: HttpClient) { }

  // Get Todos
  getTodos(): Observable<Todo[]> {
   return this.http.get<Todo[]>(`${this.todosUrl}`);
  }

  // Get Todo item by ID
  getTodoItemById(id: string): Observable<Todo[]> {
    const url = `${this.todosUrl}/${id}`;
    // let get = this.http.get<Todo[]>(url, httpOptions);
    // get.subscribe(todos => console.log(todos));
    return this.http.get<Todo[]>(url, httpOptions);
     }

  // Add Todo
  addTodo(todo: Todo): Observable<Todo> {
      return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
    }

  // Toggle Completed
  toggleCompleted(todo: Todo): Observable<any> {
      const url = `${this.todosUrl}/${todo.id}`;
      return this.http.put(url, todo, httpOptions);
    }

  // Delete Todo
  deleteTodo(todo: Todo): Observable<Todo> {
      const url = `${this.todosUrl}/${todo.id}`;
      return this.http.delete<Todo>(url, httpOptions);
    }
}
