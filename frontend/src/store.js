import { createStore } from 'vuex'

const state = {
  movies: []
}


const mutations = {
  setMovies(state, list) {
    state.movies = list
  }
}

const actions = {
  async fetchMovie(store) {
    let list = await fetch('/rest/movies')
    list = await list.json()
    console.log(list)
    store.commit('setMovies', list)
  }

}

export default createStore({ state, mutations, actions })