import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from './../../services/todo.service';
import { Todo } from 'src/app/models/Todo';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
  }

  // Set Dynamic Classes
setClasses() {
    const classes = {
      todo : true,
      'is-complete': this.todo.completed
    };
    return classes;
  }
/**
 *
 * @param {*} todo
 * @memberof TodoItemComponent
 */
onToggle(todo) {
  // Toggle complete status on UI
  todo.completed = !todo.completed;
  // Toggle complete status on Serve
  this.todoService.toggleCompleted(todo).subscribe(todo =>
    console.log(todo));
}


/**
 *
 * @param {*} todo
 * @memberof TodoItemComponent
 */
onDelete(todo) {
  this.deleteTodo.emit(todo);
}

/**
 *
 * @param {*} todo
 * @memberof TodoItemComponent
 */
getTodoItemById(todo) {
  this.router.navigate(['/item' , todo.id]);
}

}
