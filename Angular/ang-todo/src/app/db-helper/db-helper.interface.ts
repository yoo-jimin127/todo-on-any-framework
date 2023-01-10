import { TodoState, Todo } from "../models/todo";

export interface iTodoDataSaver {
    add(data: string): void;
    allTodos: Todo[];
    updateTodoState(id: number, toState: TodoState): void;
    delete(id: number): void; 
}