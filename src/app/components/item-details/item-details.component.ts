import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from './../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  @Input() todo: Todo;
  todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

}
