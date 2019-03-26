import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import store from '../vuex'
Vue.use(Router)

/*
 *我们已经可以通过组合组件来组成应用程序，当你要把 Vue Router 添加进来，我们需要做的是，
 * 将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router 在哪里渲染它们。
 * 下面是个Html例子：
 * <!-- 使用 router-link 组件来导航. -->
 * <!-- 通过传入 `to` 属性指定链接. -->
 * <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
 * <div>
 *    <router-link to="/bar">Go to Bar</router-link>
 * </div>
 * 下面时JavaScript例子：
 *   const routers =[
 *    {path: '/',name: 'HelloWorld',component: HelloWorld}
 *    ]
 * */
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {// 这是另外一种导入方式
      path: '/',
      name: 'HelloWorld1',
      component: () => import('@/components/model/login/login'),
      children: [
      // ...routers1,   这个时表示子陆游，并且吧子路由里面的陆游对象拉平
      // ...routers2
      ]
    }
  ]
})
// 在陆游以前做点什么
router.beforeEach((to, from, next) => {
  store.commit('updateRouting', true)
  next()
})

// 在陆游以后做点什么，还有些方法查文档和，方法怎么用
router.afterEach((to, from, next) => {
  let matched = to.matched[to.matched.length - 1]
  store.commit('updateMatched', matched)
  store.commit('updateRouting', false)
})
export default router
