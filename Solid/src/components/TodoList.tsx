import { For } from "solid-js";
import { PropAliases } from "solid-js/web";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

interface TodoListProps {
    todos: Todo[];
}
const TodoList = (props: TodoListProps) => {
    return (
        <div class={styles.container}>
            <For each={props.todos}> 
                {/* 인덱스가 바뀔 일이 있을 때 사용 */}
                {(todo, index) => (
                    <TodoItem {...todo} />
                )}
            </For>
            {}
        </div>
    )
};

export default TodoList;