<template>
    <div class="dashboard">
        <Search></Search>
        <transition name="appear">
            <div v-if="!dashboardToggling" class="dashboard__inner" :class="dashboardState">
                <Todo></Todo>
                <InProgress></InProgress>
                <Testing></Testing>
                <Done></Done>
            </div>
            <DashboardLoader v-else></DashboardLoader>
        </transition>
        <Viewbar></Viewbar>
        <GitHubCorner></GitHubCorner>
    </div>
</template>

<script>

import Todo from "./Todo";
import InProgress from "./InProgress";
import Testing from "./Testing";
import Done from "./Done";
import Search from "./Search";
import Viewbar from "../../components/Viewbar/Viewbar";
import GitHubCorner from "../../components/GitHubCorner/GitHubCorner";

import {mapGetters} from 'vuex';

export default {
    components: {
        Todo,
        InProgress,
        Testing,
        Done,
        Search,
        Viewbar,
        GitHubCorner,
        DashboardLoader: () => import('../../components/Loaders/DashboardLoader.vue')
    },
    computed: {
        ...mapGetters(['dashboardState', 'dashboardToggling'])
    }
}

</script>