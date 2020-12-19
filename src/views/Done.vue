<template>
    <transition name="appear">
        <div v-if="!dashboardToggling" class="dashboard__inner" :class="dashboardState">
            <Done :filteredTasks="filteredTasks(doneTasks)"></Done>
        </div>
        <DashboardLoader v-else></DashboardLoader>
    </transition>
</template>

<script>

    import Done from "../components/Dashboard/Done";

    import {mapGetters} from 'vuex';

    export default {
        components: {
            Done,
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