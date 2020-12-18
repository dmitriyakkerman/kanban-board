import Vue from "vue";
import Vuex from 'vuex';
import tasks from "./modules/tasks";
import dashboard from "./modules/dashboard";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        tasks,
        dashboard
    }
})