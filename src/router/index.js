import Vue from 'vue'
import VueRouter from 'vue-router'
import AllTasks from "../views/AllTasks";
import InProgress from "../views/InProgress";
import Testing from "../views/Testing";
import Done from "../views/Done";
import Stats from "../views/Stats";

Vue.use(VueRouter)

export default new VueRouter(({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: AllTasks
        },
        {
            path: '/in-progress',
            component: InProgress
        },
        {
            path: '/testing',
            component: Testing
        },
        {
            path: '/done',
            component: Done
        },
        {
            path: '/stats',
            component: Stats
        }
    ]
}))