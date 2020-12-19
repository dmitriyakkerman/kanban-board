<template>
    <div class="board board--in-progress">
        <div class="board__title">In Progress</div>
        <draggable class="tasks list-group" :list="inProgressTasks" group="tasks" @add="onUpdate" @remove="onUpdate">
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
            ...mapGetters(['inProgressTasks'])
        },
        methods: {
            ...mapMutations(['updateInProgressTasks']),
            onUpdate(){
                this.updateInProgressTasks(this.inProgressTasks)
            }
        }
    }

</script>