import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./components/mutation"
import state from './components/state'
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations
})