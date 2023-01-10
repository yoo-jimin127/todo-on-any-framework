import { Injectable } from '@angular/core';
import { TodoDBSaver } from '../db-helper/db-helper.abstract';
import { Todo, TodoState } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private dataSaver: TodoDBSaver) {}

  get allTodos() {
    return this.dataSaver.allTodos;
  }

  add(todo: string) {
    this.dataSaver.add(todo);
  }

  delete(id: number) {
    this.dataSaver.delete(id);
  }
  updateState(id: number, state: TodoState) {
    this.dataSaver.updateTodoState(id, state);
  }
}