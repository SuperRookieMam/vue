import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex) // use必须在创建store实例之前调用
const CTX = ''
/* Vuex 之后，让我们来创建一个 store。创建过程直截了当——仅需要提供一个初始 state 对象和一些 mutation：
 * 你可以通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更
 * Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）:
 * 通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中,且子组件能通过 this.$store 访问到
 * */
export default new Store({
  /* 这里时你需要计算的状态属性，需要什么你自己初始化
   * 每次获取的值都是就计算返回的，并且会出发对应的dom元素渲染
   * */
  state: {
    url: CTX,
    testArray: []
  },
  // 这里对应上对生sate 上面的属性
  // 相当与冲这个仓库中获取数据并且通过你自定获取规则来返回
  // 相当于getter
  // Getter 也可以接受其他 getter 作为第二个参数：
  // 第一个参数永远时state 要注意，这个算时约定吧，不要问我为什么
  getters: {
    getUrl: (state) => {
      return state.url
    },
    getTestArray: (state) => {
      return state.testArray.map((el) => {
        // TODO: 对el 改变后返回
        return el
      })
    }
  },
  /* 这个时对外提供的是修改state里面的属性的接口，可以在这里定义修改规则，相当于setter
   * 在组件中用store.commit('mutations里面的方法名修改')，这个会出发vue的dom元素从新渲染
   * 下面时一个列子
   * */
  mutations: {
    seturl: state => {
      state.url = ''
    }
  },
  /**
   * Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
   * 因此你可以调用 context.commit 提交一个 mutation，
   * Action 提交的是 mutation，而不是直接变更状态。
   * Action 可以包含任意异步操作。
   * Action 就不受约束！我们可以在 action 内部执行异步操作：
   * actions: {
   *        checkout ({ commit, state }, products) {
   *        // 把当前购物车的物品备份起来
   *         const savedCartItems = [...state.cart.added]
   *        // 发出结账请求，然后乐观地清空购物车
   *         commit(types.CHECKOUT_REQUEST)
   *          // 购物 API 接受一个成功回调和一个失败回调
   *         shop.buyProducts(
   *          products,
   *            // 成功操作
   *          () => commit(types.CHECKOUT_SUCCESS),
   *            // 失败操作
   *          () => commit(types.CHECKOUT_FAILURE, savedCartItems)
   *           )
   *         }
   *      }
   * 你在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions
   * 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）
   * 列：
   * import { mapActions } from 'vuex'
   *export default {
   *     // ...
   *  methods: {
   *     ...mapActions([
   *       'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
   *
   *         // `mapActions` 也支持载荷：
   *       'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
   *      ]),
   *     ...mapActions({
   *             add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
   *         })
   *        }
   *     }
   *   Action 通常是异步的，那么如何知道 action 什么时候结束呢？更重要的是，我们如何才能组合多个 action，
   *   以处理更加复杂的异步流程？
   *    首先，你需要明白 store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，
   *    并且 store.dispatch 仍旧返回 Promise：
   * */
  actions: {
    increment (context) {
      context.commit('seturl')
    },
    /* 这个就是异步调用的形式 */
    async actionA ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('someMutation')
          resolve()
        }, 1000)
      })
    },
    async actionB ({ dispatch, commit }) {
      /*
       *一个 store.dispatch 在不同模块中可以触发多个 action 函数。在这种情况下，
       * 只有当所有触发函数完成后，返回的 Promise 才会执行。
       * */
      await dispatch('actionA') // 等待 actionA 完成
      commit('gotOtherData', await this.increment())
    }
  },
  /* 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，
   * store 对象就有可能变得相当臃肿。
   * Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、
   * mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：
   * 例：
   * const moduleA = {
   *          state: { ... },
   *          mutations: { ... },
   *          actions: { ... },
   *          getters: { ... }
   *         }
   * const moduleB = {
   *          state: { ... },
   *          mutations: { ... },
   *          actions: { ... },
   *          getters: { ... }
   *         }
   *const store = new Vuex.Store({
   *      modules: {
   *           a: moduleA,
   *           b: moduleB
   *      }
   * store.state.a
   * */
  modules: {
  //   moduleA,
  //   moduleB
  }

})
