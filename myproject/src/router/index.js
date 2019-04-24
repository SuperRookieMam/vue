import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/module/adminmodule/component/login/login')
    }, {
      path: '/hompage',
      name: 'hompage',
      component: () => import('@/module/adminmodule/component/home/homePage')
    }
  ]
})
