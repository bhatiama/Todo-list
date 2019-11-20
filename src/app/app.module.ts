import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddTodoItemComponent } from './components/add-todo-item/add-todo-item.component';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { TodoItemDetailsViewComponent } from './components/todo-item-details-view/todo-item-details-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    TodoItemComponent,
    AddTodoItemComponent,
    AddTodoFormComponent,
    ItemDetailsComponent,
    TodoItemDetailsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
