import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { TodoService } from './../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item-details-view',
  templateUrl: './todo-item-details-view.component.html',
  styleUrls: ['./todo-item-details-view.component.scss']
})
export class TodoItemDetailsViewComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  getItemById(todo: Todo) {
    console.log('In view');
    this.todoService.getTodoItemById(todo).subscribe(todos => {
      this.todos = todos;
    });
  }

}
