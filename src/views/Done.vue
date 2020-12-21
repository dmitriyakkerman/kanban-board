<template>
    <div v-if="!dashboardToggling" class="dashboard__inner" :class="dashboardState">
        <Board :filteredTasks="filteredTasks(doneTasks)" :category="doneTasks" :title="'Done'" :classModifier="'done'"></Board>
    </div>
</template>

<script>

    import Board from "../components/Dashboard/Board";
    import {mapGetters} from 'vuex';
    import {filteredTasks} from "../functions";

    export default {
        components: {
            Board
        },
        computed: {
            ...mapGetters(['dashboardState', 'dashboardToggling', 'taskToSearch', 'doneTasks']),
        },
        methods: {
            filteredTasks
        }
    }

</script>