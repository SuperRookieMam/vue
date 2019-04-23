
const flag = 'oauth'

export default {
  namespaced: true,
  state: {
    url: {
      token: '/oauth/token',
      login: '/user/login',
      logout: '/user/logout'
    },
    user: {
      username: '未知',
      uid: '',
      rolename: '',
      roleId: ''
    },
    menus: [],
    token: {}
  },
  getter: {
    menus: state => { return state.menus },
    token: ({token: { token_type: tokenType, access_token: accessToken }}) => { return `${tokenType} ${accessToken}` },
    user: ({user}) => { return user }
  },
  mutations: {
    setMenu: (state, menus) => (state.menus = menus),
    setToken: (state, token) => (state.token = token),
    setUser: (state, { user }) => (state.user = user)
  },
  actions: {
    login ({commit, state}, params) {
      if (flag === 'oauth') {

      } else {

      }
    }
  }
}
