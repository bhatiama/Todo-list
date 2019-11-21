
import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { TodoService } from './../../services/todo.service';
import { Todo } from '../../models/Todo';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-item-details-view',
  templateUrl: './todo-item-details-view.component.html',
  styleUrls: ['./todo-item-details-view.component.scss']
})
export class TodoItemDetailsViewComponent implements OnInit {
  @Input() id: string;
  todos: Todo[];

  constructor(private todoService: TodoService, private route: ActivatedRoute ) { }

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.route.paramMap.subscribe( paramMap =>
      this.id = paramMap.get('id')
  );
    this.getItemById(this.id);
  }

  getItemById(id: string) {
    console.log('In view');
    this.todoService.getTodoItemById(id).subscribe(todos => {
      console.log(todos);
      this.todos = todos;
    });
  }

}
