import Vue from 'vue'
import VueRouter from 'vue-router'
import AllTasks from "../views/All";

Vue.use(VueRouter);

export default new VueRouter(({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: AllTasks
        },
        {
            path: '/todo',
            component: () => import('../views/Todo.vue')
        },
        {
            path: '/in-progress',
            component: () => import('../views/InProgress.vue')
        },
        {
            path: '/testing',
            component: () => import('../views/Testing.vue')
        },
        {
            path: '/done',
            component: () => import('../views/Done.vue')
        },
        {
            path: '/stats',
            component: () => import('../views/Stats.vue')
        }
    ]
}))