import productApi from "../../api/productsApi"
const state = {
  all:[]
}

const getters = {}

const mutations = {
  setProducts(state,{products}){
    state.all = products
  }
}

const actions = {
  getProducts({state,commit}){
    productApi.getPruducts((products)=>{
      commit("setProducts",{products});
    })
  }
}

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions,
}
