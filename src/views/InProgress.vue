<template>
    <div>
        <div v-if="!dashboardToggling" class="dashboard__inner" :class="dashboardState">
            <Board :filteredTasks="filteredTasks(inProgressTasks)" :category="inProgressTasks" :title="'In Progress'" :classModifier="'in-progress'"></Board>
        </div>
        <DashboardLoader v-else></DashboardLoader>
    </div>
</template>

<script>

    import Board from "../components/Dashboard/Board";

    import {mapGetters} from 'vuex';
    import {filteredTasks} from "../functions";

    export default {
        components: {
            Board,
            DashboardLoader: () => import('../components/Loaders/DashboardLoader.vue')
        },
        computed: {
            ...mapGetters(['dashboardState', 'dashboardToggling', 'taskToSearch', 'inProgressTasks']),
        },
        methods: {
            filteredTasks
        }
    }

</script>