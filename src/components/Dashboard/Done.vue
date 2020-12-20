<template>
    <div class="board board--done">
        <div class="board__title">Done</div>
        <draggable class="tasks list-group" :list="doneTasks" group="tasks" @add="onUpdate" @remove="onUpdate">
            <div class="task list-group-item" v-for="task in filteredTasks" :key="task.id">
                <div class="task__text">{{ task.title }}</div>
                <div class="task-menu">
                    <a href="" class="task-menu__edit" title="Edit">
                        <i class="task-status__icon material-icons">edit</i>
                    </a>
                    <a href="" class="task-menu__remove" title="Remove" @click.prevent="removeTask(task.id)">
                        <i class="task-status__icon material-icons">delete</i>
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
            filteredTasks: Array
        },
        computed: {
            ...mapGetters(['doneTasks'])
        },
        methods: {
            ...mapMutations(['updateDoneTasks', 'removeDoneTask']),
            onUpdate(){
                this.updateDoneTasks(this.doneTasks)
            },
            removeTask(id) {
                this.removeDoneTask(id);
            },
        }
    }

</script>