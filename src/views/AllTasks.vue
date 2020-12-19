<template>
    <div>
        <transition name="appear">
            <div v-if="!dashboardToggling" class="dashboard__inner" :class="dashboardState">
                <Todo :filteredTasks="filteredTasks(todoTasks)"></Todo>
                <InProgress :filteredTasks="filteredTasks(inProgressTasks)"></InProgress>
                <Testing :filteredTasks="filteredTasks(testingTasks)"></Testing>
                <Done :filteredTasks="filteredTasks(doneTasks)"></Done>
            </div>
            <DashboardLoader v-else></DashboardLoader>
        </transition>
        <Viewbar></Viewbar>
    </div>
</template>

<script>

    import Todo from "../components/Dashboard/Todo";
    import InProgress from "../components/Dashboard/InProgress";
    import Testing from "../components/Dashboard/Testing";
    import Done from "../components/Dashboard/Done";
    import Viewbar from "../components/Viewbar/Viewbar";

    import {mapGetters} from 'vuex';

    export default {
        components: {
            Todo,
            InProgress,
            Testing,
            Done,
            Viewbar,
            DashboardLoader: () => import('../components/Loaders/DashboardLoader.vue')
        },
        computed: {
            ...mapGetters(['dashboardState', 'dashboardToggling', 'taskToSearch', 'todoTasks', 'doneTasks', 'inProgressTasks', 'testingTasks']),
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