import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import Vuelidate from "vuelidate";
import './filters/index'
import 'materialize-css/dist/js/materialize.min'
import './scss/main.scss'

import alert from "./plugins/alert";

Vue.use(Vuelidate);
Vue.use(alert);
Vue.filter('capitalize', function (value) { return value });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

