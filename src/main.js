import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import utils from './utils'
import '../build/css/reset.css'
import '../build/css/border.css'
import '../build/css/style.css'
Vue.use(utils)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
