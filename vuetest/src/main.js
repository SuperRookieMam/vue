// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Store from './vuex'
import Login from './components/model/login/login'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Login, { Store, router }) // 比如说使用组件Login，并且对该组件注册一个routter和一个vuex的实例

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 全局路由
  Store, // 全局VUEX
  components: { App },
  template: '<App/>'
})
