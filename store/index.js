import {createRequestClient} from "~/store/request-client";
import firebase from "~/plugins/firebase";


export const state = () => ({
  candles: [],
  candle: {},
  token: '',
})

export const actions = {
  async fetchCandles({commit}, payload){
    const client = createRequestClient(this.$axios, this.$cookies, this)
    const res = await client.get(payload.uri, payload.params)
    commit('mutateCandles', res)
  },
  async setToken({commit}, payload){
    this.$cookies.set('jwt_token', payload)
    commit('mutateToken', payload)
  }
}

export const mutations = {
  mutateCandles(state, payload){
    state.candles = payload.candles ? state.candles.concat(payload.candles) : []
    state.meta = payload
  },
  mutateToken(state, payload){
    state.token = payload
  },
}

export const getters = {
  getCandles(state){
    return state.candles
  },
  isLoggedIn(state){
    return !!state.token
  }
}
