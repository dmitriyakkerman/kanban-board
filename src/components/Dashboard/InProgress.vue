<template>
    <div class="board board--in-progress">
        <h3 class="board__title">In Progress</h3>
        <draggable class="tasks list-group" :list="inProgressTasks" group="tasks">
            <div class="task list-group-item" v-for="task in inProgressTasks" :key="task.name">{{ task.name }}</div>
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
            ...mapGetters(['inProgressTasks'])
        }
    }

</script>