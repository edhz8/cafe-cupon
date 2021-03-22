import Vuex from 'vuex'
import firebase, { auth, GoogleProvider } from '@/services/initfirebase.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
    },
    getters: {
      activeUser: (state, getters) => {
        return state.user
      },
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload
      },
    },
    actions: {
      autoSignIn({ commit }, payload) {
        commit('setUser', payload)
      },

      signIn({ commit }, payload) {
        return new Promise((resolve, reject) => {
          auth.signInWithRedirect(GoogleProvider)
          resolve()
        })
      },

      signOut({ commit }) {
        auth
          .signOut()
          .then(() => {
            commit('setUser', null)
          })
          .catch((err) => console.log(error))
      },
    },
  })
}

export default createStore
