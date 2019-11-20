import { Time } from '@angular/common';

export class Todo {
  id: any;
  title: string;
  description: string;
  duedate: Date;
  duetime: Time;
  completed: boolean;
}
