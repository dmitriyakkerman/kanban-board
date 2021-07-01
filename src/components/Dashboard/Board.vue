<template>
    <div class="board" :class="'board--' + tasksInfo.info.classModifier">
        <div class="board__title">{{ tasksInfo.info.title }}</div>
        <draggable class="tasks list-group" :list="tasksInfo.tasks" group="tasks" @add="onUpdate" @remove="onUpdate">
            <div class="task list-group-item" v-for="task in filteredTasks" :key="task.id">
                <div class="task-data">
                    <div class="task__title">{{ task.title }}</div>
                    <div class="task__text">{{ task.text }}</div>
                </div>
                <div class="task-menu">
                    <a href="" class="task-menu__remove" title="Remove" @click.prevent="removeTask(task.id, tasksInfo.info.title)">
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
            tasksInfo: Object
        },
        computed: {
            ...mapGetters(['todoTasks', 'inProgressTasks', 'doneTasks'])
        },
        methods: {
            ...mapMutations(['updateTasks', 'deleteTask']),
            onUpdate(){
                this.updateTasks(this.todoTasks);
                this.updateTasks(this.inProgressTasks);
                this.updateTasks(this.doneTasks);
            },
            removeTask(id, title) {
                let taskInfo = {
                    id,
                    title
                };

                this.deleteTask(taskInfo);
            }
        }
    }

</script>