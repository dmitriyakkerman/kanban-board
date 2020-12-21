<template>
    <div>
        <div v-if="!dashboardToggling" class="dashboard__inner" :class="dashboardState">
            <InProgress :filteredTasks="filteredTasks(inProgressTasks)"></InProgress>
        </div>
        <DashboardLoader v-else></DashboardLoader>
    </div>
</template>

<script>

    import InProgress from "../components/Dashboard/InProgress";

    import {mapGetters} from 'vuex';

    export default {
        components: {
            InProgress,
            DashboardLoader: () => import('../components/Loaders/DashboardLoader.vue')
        },
        computed: {
            ...mapGetters(['dashboardState', 'dashboardToggling', 'taskToSearch', 'inProgressTasks']),
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