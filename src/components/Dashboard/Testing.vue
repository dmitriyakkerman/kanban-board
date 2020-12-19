<template>
    <div class="board board--testing">
        <div class="board__title">Testing</div>
        <draggable class="tasks list-group" :list="testingTasks" group="tasks" @add="onUpdate" @remove="onUpdate">
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