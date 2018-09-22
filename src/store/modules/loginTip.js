export default {
  state: {
    show: false
  },
  mutations: {
    switchDialog(state) {
      state.show = state.show ? false : true;
    }
  }
}
