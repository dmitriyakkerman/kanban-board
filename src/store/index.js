import Vue from "vue";
import Vuex from 'vuex';
import sidebar from "./modules/sidebar";
import dashboard from "./modules/dashboard";
import tasks from "./modules/tasks";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        sidebar,
        dashboard,
        tasks
    }
})