<template>
    <div class="board board--todo">
        <div class="board__title">ToDo</div>
        <draggable class="tasks list-group" :list="todoTasks" group="tasks" @add="onUpdate" @remove="onUpdate">
            <div class="task list-group-item" v-for="task in filteredTasks" :key="task.id">{{ task.text }}</div>
        </draggable>
    </div>
</template>

<script>

    import draggable from 'vuedraggable'
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        components: {
            draggable
        },
        props: {
            filteredTasks: Array
        },
        computed: {
            ...mapGetters(['todoTasks'])
        },
        methods: {
            ...mapMutations(['updateTodoTasks']),
            onUpdate(){
                this.updateTodoTasks(this.todoTasks)
            }
        }
    }

</script>