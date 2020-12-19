import Vue from 'vue'
import VueRouter from 'vue-router'
import AllTasks from "../views/AllTasks";
import InProgress from "../views/InProgress";
import Expiring from "../views/Expiring";
import Testing from "../views/Testing";
import Done from "../views/Done";


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
            path: '/expiring',
            component: Expiring
        },
        {
            path: '/testing',
            component: Testing
        },
        {
            path: '/done',
            component: Done
        }
    ]
}))