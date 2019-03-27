import routers from '../router'
import storeModule from '../vuex'

export default {
  install (Vue, { store, router }) {
    router.addRoutes(routers)
    store.registerModule('homePage', storeModule)
  }
}
