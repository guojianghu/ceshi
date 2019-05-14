import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = { //要设置的全局访问的state对象
  // username: localStorage.getItem('username') || ''
  username: localStorage.getItem('username') || ''
}
// mutattions是一个对象,可以放改变state的初始值的方法
const mutations = {
  setUserName(state, name) {
    // 用户名重新赋值
    state.username = name
  }
}

export default new Vuex.Store({
  state,
  mutations
})