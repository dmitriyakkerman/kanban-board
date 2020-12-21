<template>
    <div v-if="!dashboardToggling" class="dashboard__inner" :class="dashboardState">
        <Board :filteredTasks="filteredTasks(todoTasks)" :category="todoTasks" :title="'Todo'" :classModifier="'todo'"></Board>
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
            ...mapGetters(['dashboardState', 'dashboardToggling', 'taskToSearch', 'todoTasks']),
        },
        methods: {
            filteredTasks
        }
    }

</script>