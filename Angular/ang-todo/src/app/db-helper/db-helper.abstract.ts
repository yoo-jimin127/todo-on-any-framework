import { state } from '@angular/animations';
import { TodoState, Todo } from '../models/todo';
import { iTodoDataSaver } from './db-helper.interface';

export abstract class TodoDBSaver implements iTodoDataSaver {
    todoObjBuilder(todo: string) {
        return {
            todo: todo,
            state: TodoState.NORMAL,
            id: Date.now(),
        };
    }

    abstract add(data: string): void;
    abstract allTodos: Todo[];
    abstract updateTodoState(id: number, toState: TodoState): void;
    abstract delete(id: number): void;;
}