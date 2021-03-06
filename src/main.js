import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vSelect from 'vue-select'

Vue.config.productionTip = false
Vue.component('v-select', vSelect)

import 'vue-select/dist/vue-select.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
