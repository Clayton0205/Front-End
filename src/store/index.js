import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null, product: null, user: null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    async getProducts(context) {
      let fetched = await fetch('https://standom1.herokuapp.com/products');
      let res = await fetched.json();
      context.commit('setProducts', res.products)
      },
      async getUser(context) {
        let fetched = await fetch('https://standom1.herokuapp.com/users');
        let res = await fetched.json();
        context.commit('setUser', res.user)
      }
    },
  modules: {
  }
})
