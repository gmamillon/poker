import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router'

export default createStore({
  state: {
    user: {},
    token: "",
    gameCode: "",
  },
  mutations: {
    LOG(state, res) {
      state.user = res.user;
      state.token = res.token;
    },
    JOIN_TOURNAMENT(state, code) {
      state.gameCode = code;
      router.push({ name: "Table" });
    },
  },
  actions: {
    log(context, username) {
      axios.post("localhost:3000/api/log", username)
      .then(res => {
        context.commit("LOG", res);
      }).catch(console.log)
    },
    joinTournament(context, code) {
      const auth = { headers: { Authorization: `Bearer "${context.state.token}"` }};
      axios.post("localhost:3000/api/join", code, auth)
      .then(
        context.commit("JOIN_TOURNAMENT", code)
      ).catch(console.log)
    },
    createTournament(context, settings) {
      const auth = { headers: { Authorization: `Bearer "${context.state.token}"` }};
      axios.post("localhost:3000/api/create", settings, auth)
      .then(
        context.commit("JOIN_TOURNAMENT", context.state.user.name)
      ).catch(console.log)
    },
  },
  modules: {
  }
})
