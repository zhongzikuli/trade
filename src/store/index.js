import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import loginTip from './modules/loginTip'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user,
    loginTip
  },
  getters
});

export default store
