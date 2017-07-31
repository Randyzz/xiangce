import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// import axios from 'axios'
import cart from './components/cart/cart.vue'
import home from './components/home/home.vue'
import info from './components/info/info.vue'
import auth from './auth/auth'
// Vue.prototype.$http = axios
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

Vue.http.options.xhr = {
  withCredentials: true
}
auth.checkAuth()
const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  component: home
}, {
  path: '/cart',
  component: cart
}, {
  path: '/info',
  component: info
}]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
