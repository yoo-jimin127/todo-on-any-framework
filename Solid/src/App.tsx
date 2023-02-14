import type { Component } from 'solid-js';
import { sortUserPlugins } from 'vite';
import styles from './App.module.css';
import logo from './assets/solid-logo.png';
import Input from './components/Input';
import TodoList from './components/TodoList';
import * as Todos from "./stores/todos";

const App: Component = () => {
  return (
    <div class={styles.container}>
      <div class={`${styles.circle} ${styles.circle1}`} />
      <div class={`${styles.circle} ${styles.circle2}`} />
      <div class={styles.titleArea}>
        <p class={styles.titleText}>JIMIN's</p>
        <p class={`${styles.titleText} ${styles.titlePrimaryText}`}>SOLID</p>
        <p class={styles.titleText}>TODO APP</p>
        <img src={logo} class={styles.titleImage} />
      </div>

      <TodoList 
        todos={Todos.todos}
        onItemUpPress={Todos.moveTodoUp}
        onItemDownPress={Todos.moveTodoDown}
        onItemDelete={Todos.deleteTodo}
        onItemToggle={Todos.toggleTodo}
      />

      <div class={styles.input}>
        <Input placeholder='Write TODO item' onConfirm={(text) => {
          if (text !== "") {
            Todos.addTodo(text);
          }
        }}/>
      </div>
    </div>
  );
};

export default App;