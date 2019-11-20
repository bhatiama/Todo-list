import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemDetailsViewComponent } from './todo-item-details-view.component';

describe('TodoItemDetailsViewComponent', () => {
  let component: TodoItemDetailsViewComponent;
  let fixture: ComponentFixture<TodoItemDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
