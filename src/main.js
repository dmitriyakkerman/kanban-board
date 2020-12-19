import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import './filters/index'
import 'materialize-css/dist/js/materialize.min'
import './scss/main.scss'

Vue.filter('capitalize', function (value) { return value })

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
