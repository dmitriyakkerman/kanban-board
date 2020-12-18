<template>
    <ul class="viewbar">
        <li class="viewbar__item" :class="{'active': dashboardState === 'horizontal'}">
            <a href="" @click.prevent="toggleDashboard('horizontal')">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </a>
        </li>
        <li class="viewbar__item" :class="{'active': dashboardState === 'vertical'}">
            <a href="" @click.prevent="toggleDashboard('vertical')">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </a>
        </li>
    </ul>
</template>

<script>

    import {mapGetters, mapActions} from 'vuex';

    export default {
        methods: {
            ...mapActions(['toggleDashboardType']),
            toggleDashboard(type) {
                this.toggleDashboardType(type)
            }
        },
        computed: {
            ...mapGetters(['dashboardState'])
        }
    }

</script>