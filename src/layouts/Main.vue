<template>
    <div>
        <Sidebar></Sidebar>
        <Dashboard></Dashboard>
        <Modal></Modal>
    </div>
</template>

<script>

    import Sidebar from "../components/Sidebar/Sidebar";
    import Dashboard from "../components/Dashboard/Dashboard";
    import Modal from "../components/Modal/Modal";

    import {mapGetters} from 'vuex';

    export default {
        name: 'App',
        components: {
            Sidebar,
            Dashboard,
            Modal
        },
        computed: {
            ...mapGetters(['dashboardToggling'])
        }
    }
</script>