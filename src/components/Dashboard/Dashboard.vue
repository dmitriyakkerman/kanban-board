<template>
    <div class="dashboard">
        <Search v-if="$router.currentRoute.path !== '/stats'"></Search>
        <transition name="fade">
            <router-view></router-view>
        </transition>
        <transition name="appear">
            <DashboardLoader v-if="dashboardToggling"></DashboardLoader>
        </transition>
    </div>
</template>

<script>

import Search from "./Search";

import {mapGetters} from 'vuex'

export default {
    components: {
        Search,
        DashboardLoader: () => import('../../components/Loaders/DashboardLoader.vue')
    },
    computed: {
        ...mapGetters(['dashboardToggling'])
    }
}

</script>