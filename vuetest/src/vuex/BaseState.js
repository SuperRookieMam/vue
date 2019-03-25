import Vue from 'vue'

export default class BaseState extends Vue {
  namespaced = true
  state ={
    url: ''
  }
  constructor ({url}) {
    super()
    this.state.url = url
  }
  actions = {
    get ({ state }, params) {
      if (params.id) {
        return Vue.http.get(`${state.url}/${params.id}`, params)
      } else {
        return Vue.http.get(state.url, params)
      }
    },
    save ({ state }, data) {
      return Vue.http.post(state.url, data)
    },
    saveList ({ state, uri }, data) {
      if (Array.isArray(data)) {
        return Vue.http.post(`${state.url}/${uri}`, data)
      }
    },
    update ({ state }, data) {
      return Vue.http.put(state.url, data)
    },
    updateList ({ state, uri }, data) {
      if (Array.isArray(data)) {
        return Vue.http.put(`${state.url}/${uri}`, data)
      }
    },
    updateField ({ state, uri }, data) {
      return Vue.http.put(`${state.url}/${uri}`, data)
    },
    updateFields ({ state, uri }, data) {
      if (Array.isArray(data)) {
        return Vue.http.put(`${state.url}/${uri}`, data)
      }
    },
    del ({ state }, { id }) {
      return Vue.http.delete(`${state.url}/${id}`)
    },
    delWhere ({ state, uri }, data) {
      return Vue.http.post(`${state.url}/${uri}`, data)
    }
  }
}
