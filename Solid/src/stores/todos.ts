import {createStore, produce} from "solid-js/store"; // immer
import type { Todo } from "../types/todo";

export const [todos, setTodos] = createStore<Todo[]>([]); // accessor가 아닌 proxy object
// createSignal : 1개만 추적
// createStore : 어떤 시그널이든 다 추적

const swapTodos = (firstIndex: number, secondIndex: number) => {
    setTodos(
        produce((prev) => {
            const tmp = prev[firstIndex];
            prev[firstIndex] = prev[secondIndex];
            prev[secondIndex] = tmp;
        })
    );
};

export const moveTodoUp = (index: number) => {
    if (todos.length >= 2 && index > 0) {
        swapTodos(index-1, index);
    }
};

export const moveTodoDown = (index: number) => {
    if (todos.length >= 2 && index < todos.length -1) {
        swapTodos(index, index+1);
    }
}