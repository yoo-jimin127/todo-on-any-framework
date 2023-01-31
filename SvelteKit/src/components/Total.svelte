<script lang="ts">
	import { todoData } from "../store";


    let completedTodo = $todoData.filter((todo) => todo.completed).length
    let ratio = $todoData.length > 0 ? Number((completedTodo / $todoData.length).toFixed(2)) : 0
</script>

<div>
    Total :
    <span>
        <b>{ratio}</b>
        %
    </span>
</div>