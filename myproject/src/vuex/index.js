import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)
// const CTX = CONTEXT_PATH + 'http://localhost:8080'
export default new Store({
  state: {
    url: {},
    title: '测试平台',
    loadingCount: 0,
    routing: false, // 当前是否在导航中
    matched: null, // 匹配到的路由
    crumbs: [], // 面包屑
    data: {}
  },
  getters: {
    data (state) {
      return state.data
    }
  },
  mutations: {
    data (state) {
      state.data = {
        code: 0,
        msg: '操作成功',
        data: [{name: '就是好男人', password: '123456', other: '张三李四王麻子'}]
      }
    }
  },
  actions: {},
  modules: {
  }
})
