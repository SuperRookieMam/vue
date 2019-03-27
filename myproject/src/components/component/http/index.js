// import store from '@/vuex'
import axios from 'axios'

const instance = axios.create()

instance.interceptors.request.use(config => {
  /* config.paramsSerializer = (params) => {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  }
  let authorization = store.getters['security/token']
  if (authorization !== null) {
    config.headers['Authorization'] = store.getters['security/token']
  }
  store.commit('loading') */
  return config
}, error => {
  return Promise.reject(error)
})
instance.interceptors.response.use(response => { /*
  store.commit('loadingComplete')
  let err = '与服务器交互时出现错误'
  let { status, data, error } = response

  if (status >= 200 && status < 300) {
    return data
  } else {
    err += `,错误信息=[${error}]`
  }
  store.commit('addError', err) */
  return Promise.reject(response)
}, error => {
  /* store.commit('loadingComplete')
  let { response: { status } } = error
  if (status === 401) {
    let url = encodeURI(window.location.href)
    sessionStorage.setItem('savedUrl', url)
    router.replace({ name: 'login' })
  } else {
    store.commit('addError', error)
  } */
  return Promise.reject(error)
})

export default instance
