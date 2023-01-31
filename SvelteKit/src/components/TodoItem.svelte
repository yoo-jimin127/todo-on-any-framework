<script lang="ts">
    import { todoData } from "../store";

    export let todo;
    let {id, text, completed} = todo;

    const handleRemoveTodo = (id: number) => {
        $todoData = $todoData.filter((todo) => todo.id === id)
    };
</script>

<div>
    <label>
        <input type="checkbox" bind:checked={completed} />
        {text}
    </label>
    <button>x</button>
</div>