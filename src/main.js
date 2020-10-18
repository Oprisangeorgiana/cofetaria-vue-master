import Vue from 'vue'
import App from './App.vue'
import router from 'router/router'
import store from 'store/store'
import './registerServiceWorker'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/helper.css'
import '@fortawesome/fontawesome-free/js/all'
import VueLodash from 'vue-lodash'
const options = { name: '_' } // customize the way you want to call it

Vue.use(VueLodash) // options is optional

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
