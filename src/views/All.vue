<template>
    <div>
        <transition name="appear">
            <div v-if="!dashboardToggling" class="dashboard__inner" :class="dashboardState">
                <Board :filteredTasks="filteredTasks(todoTasks)" :category="todoTasks" :title="'Todo'" :classModifier="'todo'"></Board>
                <Board :filteredTasks="filteredTasks(inProgressTasks)" :category="inProgressTasks" :title="'In Progress'" :classModifier="'in-progress'"></Board>
                <Board :filteredTasks="filteredTasks(testingTasks)" :category="testingTasks" :title="'Testing'" :classModifier="'testing'"></Board>
                <Board :filteredTasks="filteredTasks(doneTasks)" :category="doneTasks" :title="'Done'" :classModifier="'done'"></Board>
            </div>
            <DashboardLoader v-else></DashboardLoader>
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
            Viewbar,
            DashboardLoader: () => import('../components/Loaders/DashboardLoader.vue')
        },
        computed: {
            ...mapGetters(['dashboardState', 'dashboardToggling', 'taskToSearch', 'todoTasks', 'doneTasks', 'inProgressTasks', 'testingTasks']),
        },
        methods: {
            filteredTasks
        }
    }

</script>