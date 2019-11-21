import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { TodoItemDetailsViewComponent } from './components/todo-item-details-view/todo-item-details-view.component';

const routes: Routes = [
  { path: '', component: TodoListComponent},
  { path: 'add', component: AddTodoFormComponent},
  { path: 'item/:id', component: TodoItemDetailsViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
