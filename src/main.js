// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './router'
import '../src/assets/style/reset.css'
import '../src/assets/style/border.css' 
import '../src/assets/style/iconfont/iconfont.css'
Vue.use(Router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { 
    App,
    Router
   },
  template: '<App/>'
})
