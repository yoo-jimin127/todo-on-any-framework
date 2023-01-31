<script lang="ts">
    import { todoData } from "../store";

    export let todo;
    let {id, text, completed} = todo;

    const handleRemoveTodo = (id: number) => {
        $todoData = $todoData.filter((todo) => todo.id === id)
    };

    const handleCompleteTodo = (id: number) => {
        const index = $todoData.findIndex((todo) => todo.id === id)
        $todoData[index].completed = !$todoData[index].completed;
    };
</script>

<div>
    <label>
        <input type="checkbox" bind:checked={completed} on:click={() => handleCompleteTodo(id)} />
        {text}
    </label>
    <button on:click={() => handleRemoveTodo(id)}>x</button>
</div>