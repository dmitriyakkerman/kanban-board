<template>
    <div class="board board--done">
        <div class="board__title">Done</div>
        <draggable class="tasks list-group" :list="doneTasks" group="tasks" @add="onUpdate" @remove="onUpdate">
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
            ...mapGetters(['doneTasks'])
        },
        methods: {
            ...mapMutations(['updateDoneTasks']),
            onUpdate(){
                this.updateDoneTasks(this.doneTasks)
            }
        }
    }

</script>