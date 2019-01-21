// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from '../static/jquery-1.8.3.min'
Vue.config.productionTip = false

//入口文件，只有一个根的viewmodel

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render (h){
    return h(App)
  }
})
