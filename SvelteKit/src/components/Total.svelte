<script lang="ts">
	import { todoData } from "../store";


    $: completedTodo = $todoData.filter((todo) => todo.completed).length
    $: ratio = $todoData.length > 0 ? Number((completedTodo / $todoData.length).toFixed(2)) : 0
</script>

<div>
    Total :
    <span>
        <b>{ratio * 100}</b>
        %
    </span>
</div>

<style>
	div {
		border-top: 2px dashed;
		padding: 1rem 0;
		display: flex;
		justify-content: space-between;
		font-size: 1.2rem;
	}
	span {
		color: rgb(110, 44, 243);
	}
	b {
		font-size: 1.4rem;
	}
</style>