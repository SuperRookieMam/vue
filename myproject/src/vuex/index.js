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
    loading: ({loadingCount}) => loadingCount > 0
  },
  mutations: {
    loading (state) {
      state.loadingCount++
      console.debug('after loading the loading count is ', state.loadingCount)
    },
    loadingComplete (state) {
      state.loadingCount--
      console.debug('after complete the loading count is ', state.loadingCount)
    }
  },
  actions: {},
  modules: {
  }
})
