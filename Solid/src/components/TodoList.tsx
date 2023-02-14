import { createSignal, For } from "solid-js";
import { PropAliases } from "solid-js/web";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

interface TodoListProps {
    todos: Todo[];
    onItemDone?: (index: number) => void;
    onItemUpPress?: (index: number) => void;
    onItemDownPress?: (index: number) => void;
    onItemDelete?: (index: number) => void; 
}

// const [todo1] = createSignal({});
// const [todo2] = createSignal({});
// const [todos, setTodos] = createSignal([todo1, todo2]);
// todos()[0]() // 얘도 시그널
// 중첩된 반응성 (반응성 내에 반응성이 또 있음)

const TodoList = (props: TodoListProps) => {
    return (
        <div class={styles.container}>
            <For each={props.todos}> 
                {/* 인덱스가 바뀔 일이 있을 때 사용 */}
                {(todo, index) => (
                    <TodoItem {...todo} onToggle={() => {
                        props.onItemDone?.(index());
                    }}
                    onUpPress={() => {
                        props.onItemUpPress?.(index());
                    }}
                    onDownPress={() => {
                        props.onItemDownPress?.(index());
                    }}
                    onDelete={() => {
                        props.onItemDelete?.(index());
                    }} />
                )}
            </For>
            {}
        </div>
    )
};

export default TodoList;