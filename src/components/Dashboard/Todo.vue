<template>
    <div class="board board--todo">
        <h3 class="board__title">ToDo</h3>
        <draggable class="tasks list-group" :list="todoTasks" group="tasks">
            <div class="task list-group-item" v-for="task in todoTasks" :key="task.name">{{ task.name }}</div>
        </draggable>
    </div>
</template>

<script>

    import draggable from 'vuedraggable'
    import {mapGetters} from 'vuex'

    export default {
        components: {
            draggable
        },
        computed: {
            ...mapGetters(['todoTasks'])
        }
    }

</script>