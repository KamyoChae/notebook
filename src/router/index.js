import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home' 
import Edit from '../components/Edit' 
Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/Edit',
        name: 'Edit',
        component: Edit
      }
    ]
    
  })