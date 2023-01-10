import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocalDBSaver } from '../db-helper/db-helper.localDB';
import { TodoState } from '../models/todo';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  db = new TodosService(new LocalDBSaver());
  newTodo = new FormControl('');

  addTodo(e: any) {
    e.preventDefault();
    if (!this.newTodo.value) return;
    this.db.add(this.newTodo.value);
    this.newTodo.setValue('');
  }

  delTodo(id: number) {
    this.db.delete(id);
  }

  updateState(id: number, nowState: string) {
    if (nowState === TodoState.NORMAL) this.db.updateState(id, TodoState.DONE);
    else this.db.updateState(id, TodoState.NORMAL);
  }
}
