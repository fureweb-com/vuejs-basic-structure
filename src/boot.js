import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({ routes, mode: 'history' })
new Vue({
  router,
  render(h) { return h(app) }
}).$mount('app')