import { TodoState, Todo } from "../models/todo";
import { TodoDBSaver } from "./db-helper.abstract";

export class LocalDBSaver extends TodoDBSaver {
    private localDBKey = 'todo-app-data';

    localDBSaver(todosObjData: Todo[]) {
        try {
            localStorage.setItem(this.localDBKey, JSON.stringify(todosObjData));
        } catch(e) {
            console.log('LocalDBSaver save error');
        }
    }

    add(todo: string): void {
        const todoObj = this.todoObjBuilder(todo);
        const prevTodos = this.allTodos || [];
        let todoObjData;
        if (prevTodos.length === 0) {
            todoObjData = new Array(todoObj);
        } else {
            todoObjData = prevTodos.concat(todoObj);
        }
        this.localDBSaver(todoObjData);
    }

    get allTodos() {
        const localData = JSON.parse(
            localStorage.getItem(this.localDBKey) || '[]') as Todo[];
            return localData;
    }

    updateTodoState(id: number, toState: TodoState): void {
        const allTodos = this.allTodos;
        const todoIdx = allTodos.findIndex((todo) => todo.id === id);
        allTodos[todoIdx].state = toState;
        this.localDBSaver(allTodos);
    }

    delete(id: number): void {
        const allTodos = this.allTodos;
        const filteredTodos = allTodos.filter((todo) => todo.id !== id);
        this.localDBSaver(filteredTodos);
    }
}