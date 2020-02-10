import { Component, OnInit } from '@angular/core';

import { TodoService } from './../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.scss']
})
export class AddTodoFormComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    // Load all todo items on page load
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  /**
   *
   * @param {Todo} todo Send todo item to add method of Todo Service
   * @memberof AddTodoFormComponent
   */
  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
