import Vue from 'vue'
import Vuex from 'vuex'
import homegrid from "./moduls/homegrid"
import vipicons from "./moduls/vipicons"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rukuinfo: [
      { num: "rk123456", title: "长城五星", time: "1/22/2021", count: "1", bool: "true" },
      { num: "rk312415", title: "长城五星", time: "2/10/2022", count: "2", bool: "true" },
      { num: "rk312415", title: "长城五星", time: "2/22/2022", count: "2", bool: "true" },
      { num: "rk123515", title: "长城五星", time: "3/22/2022", count: "1", bool: "true" },
    ],
    rukutottlenum: ''
  },
  mutations: {
    addnewinfo(state, obj) {
      state.rukuinfo.push(obj)
    },
    delinfo(state, obj) {
      let i = state.rukuinfo.indexOf(obj)
      state.rukuinfo.splice(i, 1)
    }
  },
  actions: {
    

  },
  modules: {
    homegrid,vipicons
  }
})
