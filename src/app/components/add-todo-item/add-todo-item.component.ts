import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.scss']
})
export class AddTodoItemComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("In onSUbmit");
    const todo = {
      title: this.title,
      completed: false
    };

    this.addTodo.emit(todo);
  }

}
