<template>
    <div class="board" :class="'board--' + classModifier">
        <div class="board__title">{{ title }}</div>
        <draggable class="tasks list-group" :list="category" group="tasks" @add="onUpdate" @remove="onUpdate">
            <div class="task list-group-item" v-for="task in filteredTasks" :key="task.id">
                <div class="task-data">
                    <div class="task__title">{{ task.title }}</div>
                    <div class="task__text">{{ task.text }}</div>
                </div>
                <div class="task-menu">
                    <a href="" class="task-menu__remove" title="Remove" @click.prevent="removeTask(task.id)">
                        <i class="material-icons">delete</i>
                    </a>
                </div>
                <div class="task__info" v-if="task.deadline">
                    <div class="task-date" title="Deadline">
                        <i class="task-date__icon material-icons">access_time</i>
                        <span class="task-date__data">{{ new Date(task.deadline) | formatDate }}</span>
                    </div>
                    <div class="task-status" v-if="new Date() > new Date(task.deadline)" title="Expired">
                        <i class="task-status__icon material-icons red-text">warning</i>
                    </div>
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
            filteredTasks: Array,
            category: Array,
            title: String,
            classModifier: String
        },
        computed: {
            ...mapGetters(['todoTasks', 'inProgressTasks', 'testingTasks', 'doneTasks'])
        },
        methods: {
            ...mapMutations(['updateTodoTasks', 'updateInProgressTasks', 'updateTestingTasks', 'updateDoneTasks', 'removeTodoTask', 'removeInProgressTask', 'removeTestingTask', 'removeDoneTask']),
            onUpdate(){
                this.updateTodoTasks(this.todoTasks);
                this.updateInProgressTasks(this.inProgressTasks);
                this.updateTestingTasks(this.testingTasks);
                this.updateDoneTasks(this.doneTasks);
            },
            removeTask(id) {
                this.removeTodoTask(id);
                this.removeInProgressTask(id);
                this.removeTestingTask(id);
                this.removeDoneTask(id);
            }
        }
    }

</script>