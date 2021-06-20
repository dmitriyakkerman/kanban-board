<template>
    <div class="dashboard">
        <transition name="fade">
            <router-view></router-view>
        </transition>
        <transition name="appear">
            <DashboardLoader v-if="dashboardToggling"></DashboardLoader>
        </transition>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
    components: {
        DashboardLoader: () => import('../../components/Loaders/DashboardLoader.vue')
    },
    computed: {
        ...mapGetters(['dashboardToggling'])
    }
}

</script>