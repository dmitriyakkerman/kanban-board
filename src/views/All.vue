<template>
    <div>
        <transition name="appear">
            <div v-if="!dashboardToggling" class="dashboard__inner" :class="dashboardState">
                <Board :filteredTasks="filteredTasks(todoTasks.tasks)" :tasksInfo="todoTasks"></Board>
                <Board :filteredTasks="filteredTasks(inProgressTasks.tasks)" :tasksInfo="inProgressTasks"></Board>
                <Board :filteredTasks="filteredTasks(doneTasks.tasks)" :tasksInfo="doneTasks"></Board>
            </div>
        </transition>
        <Viewbar></Viewbar>
    </div>
</template>

<script>

    import Board from "../components/Dashboard/Board";
    import Viewbar from "../components/Viewbar/Viewbar";

    import {mapGetters} from 'vuex';
    import {filteredTasks} from "../functions";

    export default {
        components: {
            Board,
            Viewbar
        },
        computed: {
            ...mapGetters(['dashboardState', 'dashboardToggling', 'taskToSearch', 'todoTasks', 'doneTasks', 'inProgressTasks']),
        },
        methods: {
            filteredTasks
        }
    }

</script>