import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoItemComponent } from './components/add-todo-item/add-todo-item.component';

const routes: Routes = [
  { path: '', component: TodoListComponent},
  { path: 'add', component: AddTodoItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
