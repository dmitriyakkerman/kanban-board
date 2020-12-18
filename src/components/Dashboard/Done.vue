<template>
    <div class="board board--done">
        <h3 class="board__title">Done</h3>
        <draggable class="tasks list-group" :list="doneTasks" group="tasks">
            <div class="task list-group-item" v-for="task in doneTasks" :key="task.name">{{ task.name }}</div>
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
            ...mapGetters(['doneTasks'])
        }
    }

</script>