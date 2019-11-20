import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.scss']
})
export class AddTodoItemComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;
  description: string;
  duedate: Date;
  duetime: Time;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const todo = {
      title: this.title,
      description: this.description,
      duedate: this.duedate,
      duetime: this.duetime,
      completed: false
    };

    this.addTodo.emit(todo);
    alert(`${todo.title} successfully added`);
  }

}
