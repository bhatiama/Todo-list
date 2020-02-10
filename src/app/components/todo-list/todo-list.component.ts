import { Component, OnInit } from '@angular/core';

import { TodoService } from './../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    // Get all the list items on page load
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
  /**
   *
   *
   * @param {Todo} todo Send todo item to delete method of Todo Service
   * @memberof TodoListComponent
   */
  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

}
