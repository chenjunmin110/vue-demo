import Vue from 'vue'
import Router from 'vue-router'
import homeRoute from './modules/home'
import categoryRoute from './modules/category'
import cartRoute from './modules/cart'
import topicRoute from './modules/topic'
import mineRoute from './modules/mine'
Vue.use(Router)
const routes = [
  homeRoute,
  categoryRoute,
  topicRoute,
  cartRoute,
  mineRoute
]
export default new Router({
  mode: 'history',
  routes
})
