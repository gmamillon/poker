import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user: {},
    token: "",
  },
  mutations: {
    LOG(state, res) {
      state.user = res.user;
      state.token = res.token;
    },
  },
  actions: {
    log(context, username) {
      axios.post("localhost:3000/api/log", username)
      .then(res => {
        context.commit("LOG", res);
      })
      .catch(err => {alert(err)})
    },
  },
  modules: {
  }
})
