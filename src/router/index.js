import Vue from 'vue'
import VueRouter from 'vue-router'
import AllTasks from "../views/All";
import Login from "../views/Login";
import Register from "../views/Register";

import firebase from "firebase/app";

Vue.use(VueRouter);

const router = new VueRouter(({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: Login,
            meta: {
                layout: 'Auth',
                guest: true
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                layout: 'Auth',
                guest: true
            }
        },
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
}))

router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    if(to.matched.some(record => record.meta.auth)) {
        if(!currentUser) {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
        else {
            next()
        }
    }
    else if(to.matched.some(record => record.meta.guest)) {
        if(currentUser) {
            next({
                path: '/',
                query: {
                    redirect: to.fullPath
                }
            })
        }
        else {
            next()
        }
    }
    else {
        next();
    }
})

export default router;