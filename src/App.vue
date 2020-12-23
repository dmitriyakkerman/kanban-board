<template>
  <div id="app" class="app">
      <Preloader></Preloader>
      <Sidebar></Sidebar>
      <Dashboard></Dashboard>
      <Modal></Modal>
      <GitHubCorner></GitHubCorner>
  </div>
</template>

<script>

import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Modal from "./components/Modal/Modal";
import GitHubCorner from "./components/GitHubCorner/GitHubCorner";

import {mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {
    Preloader: () => import('./components/Loaders/Preloader.vue'),
    Sidebar,
    Dashboard,
    Modal,
    GitHubCorner
  },
  computed: {
    ...mapGetters(['dashboardToggling'])
  }
}
</script>

<style lang="scss">
    @import "~materialize-css/dist/css/materialize.min.css";
</style>