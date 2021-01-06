import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import Vuelidate from "vuelidate";
import './filters/index'
import 'materialize-css/dist/js/materialize.min'
import './scss/main.scss'

import firebase from "firebase";
import alert from "./plugins/alert";

Vue.use(Vuelidate)
Vue.use(alert)
Vue.filter('capitalize', function (value) { return value })

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyB7BZBw52u4fUujpGzDu6iPpCmeTcZbfAo",
  authDomain: "kanban-board-f6946.firebaseapp.com",
  projectId: "kanban-board-f6946",
  storageBucket: "kanban-board-f6946.appspot.com",
  messagingSenderId: "274636852102",
  appId: "1:274636852102:web:204d3c069105baad203a07"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
