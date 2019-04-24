import store from '../../vuex'
import Router from 'vue-router'

const CONTEXT_PATH = 'http://localhost:8080'
const router = new Router({
  base: CONTEXT_PATH,
  mode: 'history',
  routes: [{
    name: 'default',
    path: '/',
    redirect: '/index'
  }, {
    name: 'login',
    path: '/login',
    props: route => ({ ...route.query }),
    component: () => import('@/module/adminmodule/component/home/homePage')
  }, {
    name: 'index',
    path: '/index',
    component: () => import('@/module/adminmodule/component/login/login')
  }]
})

router.beforeEach((to, from, next) => {
  store.commit('updateRouting', true)
  next()
})

router.afterEach((to, from) => {
  let matched = to.matched[to.matched.length - 1]
  store.commit('updateMatched', matched)
  store.commit('updateRouting', false)
})
export default router
