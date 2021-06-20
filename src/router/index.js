import Vue from 'vue'
import VueRouter from 'vue-router'
import AllTasks from "../views/All";

Vue.use(VueRouter);

const router = new VueRouter(({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: AllTasks,
            meta: {
                auth: true
            }
        },
        {
            path: '/todo',
            component: () => import('../views/Todo.vue'),
            meta: {
                auth: true
            }
        },
        {
            path: '/in-progress',
            component: () => import('../views/InProgress.vue'),
            meta: {
                auth: true
            }
        },
        {
            path: '/testing',
            component: () => import('../views/Testing.vue'),
            meta: {
                auth: true
            }
        },
        {
            path: '/done',
            component: () => import('../views/Done.vue'),
            meta: {
                auth: true
            }
        },
        {
            path: '/stats',
            component: () => import('../views/Stats.vue'),
            meta: {
                auth: true
            }
        }
    ]
}));

export default router;