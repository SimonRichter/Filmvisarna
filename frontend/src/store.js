import { createStore } from 'vuex'

const state = {
  // movie: []
}


const mutations = {
  // setMovie(state, list) {
  //   state.marvel = list
  // }
}

const actions = {
  // async fetchMovie(store) {
  //   let list = await fetch('/rest/movie')
  //   list = await list.json()
  //   store.commit('setMovie', list)
  // }

}

export default createStore({ state, mutations, actions })