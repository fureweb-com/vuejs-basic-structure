import Vue from 'vue'
import router from 'vue-router'
import app from './app'

new Vue({
  router,
  render(h) { return h(app) }
}).$mount('app')