<template>
  <div id="app" class="app">
      <Sidebar></Sidebar>
      <Dashboard></Dashboard>
  </div>
</template>

<script>

import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

import {mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {
    Sidebar,
    Dashboard
  },
  computed: {
    ...mapGetters(['dashboardToggling'])
  }
}
</script>