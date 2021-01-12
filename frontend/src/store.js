import { createStore } from 'vuex'

const state = {
  movies =[],
  members =[],
  bookings =[]
}

const mutations = {
  setMovies(store, moviesList) {
    store.movies = moviesList;
  },
  setMembers(store, membersList) {
    store.members = membersList;
  },
  setBookings(store, bookingsList) {
    store.bookings = bookingsList;
  },
  addMemberToState(store, newMember) {
    store.members.push(newMember)
  }
}

const actions = {
  async fetchMovies(store) {
    let moviesList = await fetch('/rest/movie')
    moviesList = await moviesList.json()
    store.commit('setMovies', moviesList)
  },
  async fetchMembers(store) {
    let membersList = await fetch('/rest/member')
    membersList = await membersList.json()
    store.commit('setMembers', membersList)
  },
  async fetchBookings(store) {
    let bookingsList = await fetch('/rest/booking')
    bookingsList = await bookingsList.json()
    store.commit('setBookings', bookingsList)
  },
  // in-parameter is a user object user = {name: Anna, email: anna@gmail.com, password: Hej123}
  // Backend: need to use collection('Klass').insert(Object) to add a new 
  addMemberToServer(store, newMember) {
    // Fetch url of the json file. Method = POST because we want to add something new to the json file in the server
    // Body = convert the object to a json object
    let response = await fetch('/rest/member', {
      method: 'POST',
      body: JSON.stringify(newMember)
    })
    // After the new member has been saved to the json file, get it again and commit to the state array -> members
    newMember = await response.json()
    store.commit('addMemberToState', newMember)
  },
  removeMemberFromServer() {

  },
  addBookingToMember() {

  },
  removeBookingFromMember() {

  }
}

export default createStore({ state, mutations, actions })