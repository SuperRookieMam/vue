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
 *
 *
 * 我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。
 * 例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，
 * 我们可以在 vue-router 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果：
 *routes: [
 * // 动态路径参数 以冒号开头，
 * { path: '/user/:id', component: User }
 * ]
 *  /user/:username/post/:post_id 对应参数 { username: 'evan', post_id: '123' } 匹配后/user/evan/post/123
 *  router 调用方式：
 *  // 字符串
 *  router.push('home')
 *  // 对象
 * router.push({ path: 'home' })
 * // 命名的路由
 *router.push({ name: 'user', params: { userId: '123' }})
 * // 带查询参数，变成 /register?plan=private
 * router.push({ path: 'register', query: { plan: 'private' }})
 * router.go(1)
 *
 *
 *陆游重定向 /a 重定向到 /b
 * const router = new VueRouter({
 *      routes: [
 *          { path: '/a', redirect: '/b' }
 *            ]
 *       })
 *  重定向的目标也可以是一个命名的路由：
 * const router = new VueRouter({
 *      routes: [
 *          { path: '/a', redirect: { name: 'foo' }}
 *            ]
 *       })
 * 甚至是一个方法，动态返回重定向目标：
 * const router = new VueRouter({
 *      routes: [
 *         { path: '/a', redirect: to => {
 *           // 方法接收 目标路由 作为参数
 *           // return 重定向的 字符串路径/路径对象
 *         }]
 *       })
 * “重定向”的意思是，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b，那么“别名”又是什么呢？
 *  /a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。
 *const router = new VueRouter({
 *      routes: [
 *         { path: '/a', component: A, alias: '/b' }
 *         ]
 *       })
 *
 *
 *
 *
 *路由组件传参
 *
 * 在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。
 * 使用 props 将组件和路由解耦
 * 原来方式如下：
 *const User = {
 * template: '<div>User {{ $route.params.id }}</div>'
 *}
 *const router = new VueRouter({
 * routes: [
 *   { path: '/user/:id', component: User }
 * ]
 *})
 * 通过 props 解耦如下：
 * const User = {
 * props: ['id'],
 * template: '<div>User {{ id }}</div>'
 * }
 *const router = new VueRouter({
 *      routes: [
 *         { path: '/user/:id', component: User, props: true },
 *           // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
 *           {
 *           path: '/user/:id',
 *           components: { default: User, sidebar: Sidebar },
 *            props: { default: true, sidebar: false }
 *            }
 *          ]
 *       })
 * 如果 props 被设置为 true，route.params 将会被设置为组件属性。
 * 如果 props 是一个对象，它会被按原样设置为组件属性。当 props 是静态的时候有用。
 * const router = new VueRouter({
 * routes: [
 *   { path: '/promotion/from-newsletter', component: Promotion, props: { newsletterPopup: false } }
 * ]
 *})
 *
 *你可以创建一个函数返回 props。这样你便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等
 * const router = new VueRouter({
 * routes: [
 *  { path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q }) }
 * ]
 *})
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
