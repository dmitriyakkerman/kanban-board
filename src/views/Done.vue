<template>
    <div>
        <div v-if="!dashboardToggling" class="dashboard__inner" :class="dashboardState">
            <Board :filteredTasks="filteredTasks(doneTasks)" :category="doneTasks" :title="'Done'" :classModifier="'done'"></Board>
        </div>
        <DashboardLoader v-else></DashboardLoader>
    </div>
</template>

<script>

    import Board from "../components/Dashboard/Board";

    import {mapGetters} from 'vuex';

    export default {
        components: {
            Board,
            DashboardLoader: () => import('../components/Loaders/DashboardLoader.vue')
        },
        computed: {
            ...mapGetters(['dashboardState', 'dashboardToggling', 'taskToSearch', 'doneTasks']),
        },
        methods: {
            filteredTasks(tasks) {
                let that = this;
                let filteredNotes;
                filteredNotes = tasks.filter(function (task) {
                    if(task.title.toLowerCase().indexOf(that.taskToSearch.toLowerCase()) !== -1) {
                        return task
                    }
                });
                return filteredNotes
            }
        }
    }

</script>