// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex'
import ElementUi from 'element-ui'
import { httpInstance, router } from './config'
import { adminmodule } from './module'
import { AjaxPlugin } from './plugins'

Vue.use(ElementUi)
Vue.use(router)
Vue.use(adminmodule, { store, router })
Vue.use(AjaxPlugin, httpInstance)

Vue.config.productionTip = false
/* eslint-disable no-new */

/**
 *  一定要使用 render函数创建app,这样就不需要依赖完整的esm，也就是不需要打包vue的编译模块了，
 *  vue的模板编译模块体积打约是25KB左右
 */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
