<template>
    <transition name="appear">
        <div v-if="!dashboardToggling" class="dashboard__inner" :class="dashboardState">
            <Testing :filteredTasks="filteredTasks(testingTasks)"></Testing>
        </div>
        <DashboardLoader v-else></DashboardLoader>
    </transition>
</template>

<script>

    import Testing from "../components/Dashboard/Testing";

    import {mapGetters} from 'vuex';

    export default {
        components: {
            Testing,
            DashboardLoader: () => import('../components/Loaders/DashboardLoader.vue')
        },
        computed: {
            ...mapGetters(['dashboardState', 'dashboardToggling', 'taskToSearch', 'testingTasks']),
        },
        methods: {
            filteredTasks(tasks) {
                let that = this;
                let filteredNotes;
                filteredNotes = tasks.filter(function (task) {
                    if(task.text.toLowerCase().indexOf(that.taskToSearch.toLowerCase()) !== -1) {
                        return task
                    }
                });
                return filteredNotes
            }
        }
    }

</script>