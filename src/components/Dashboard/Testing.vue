<template>
    <div class="board board--testing">
        <h3 class="board__title">Testing</h3>
        <draggable class="tasks list-group" :list="testingTasks" group="tasks">
            <div class="task list-group-item" v-for="task in testingTasks" :key="task.name">{{ task.name }}</div>
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
            ...mapGetters(['testingTasks'])
        }
    }

</script>