<template>
    <div class="board board--testing">
        <div class="board__title">Testing</div>
        <draggable class="tasks list-group" :list="testingTasks" group="tasks" @add="onUpdate" @remove="onUpdate">
            <div class="task list-group-item" v-for="task in filteredTasks" :key="task.id">
                <div class="task__text">{{ task.title }}</div>
                <div class="task__info" v-if="task.deadline">
                    <div class="task-date" title="Task deadline">
                        <i class="task-date__icon material-icons">access_time</i>
                        <span class="task-date__data">{{ new Date(task.deadline) | formatDate }}</span>
                    </div>
                    <div class="task__status"></div>
                </div>
            </div>
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
            ...mapGetters(['testingTasks'])
        },
        methods: {
            ...mapMutations(['updateTestingTasks']),
            onUpdate(){
                this.updateTestingTasks(this.testingTasks)
            }
        }
    }

</script>