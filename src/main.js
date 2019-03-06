import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/common.css'

Vue.use(ElementUI)

import axios from 'axios'
//往vue原型对象上加东西
Vue.prototype.$axios = axios

axios.defaults.baseURL = 'http://litc.pro:9999/v1/'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
