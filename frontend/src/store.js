"use strict";

import { createStore } from 'vuex'

const state = {
  movies: [],
  members: [],
  bookings: [],
  showings: [],
  bookingInfo: [],
}

const mutations = {
  setMovies(state, moviesList) {
    state.movies = moviesList;
  },
  // setMembers(store, membersList) {
  //   store.members = membersList;
  // },
  setBookings(state, bookingsList) {
    state.bookings = bookingsList;
  },
  setBookingInfo(store, bookingInfo) {
    store.bookingInfo = bookingInfo;
    console.log('store.bookingInfo', store.bookingInfo)

  },
  setShowings(state, showingsList) {
    state.showings = showingsList;
  },
  // ----------- SPRINT 2 -----------
  // addMemberToState(store, newMember) {
  //   store.members.push(newMember)
  // },
  // removeMemberFromState(store, memberToDelete) {
  //   const index = store.members.indexOf(memberToDelete.email)
  //   if (index > -1) {
  //     store.members.splice(index, 1)
  //   }
  // },
  // updateMemberInState(store, updatedMember) {
  //   const index = store.members.indexOf(updatedMember.email)
  //   if (index > -1) {
  //     // Remove the old member object with the new
  //     store.members.splice(index, 1, updatedMember)
  //   }
  // }
}

const actions = {
  async fetchMovies(store) {
    let moviesList = await fetch('/rest/movies')
    moviesList = await moviesList.json()
    console.log(moviesList);
    store.commit('setMovies', moviesList)
  },
  // async fetchMembers(store) {
  //   let membersList = await fetch('/rest/member')
  //   membersList = await membersList.json()
  //   store.commit('setMembers', membersList)
  // },
  async fetchBookings(store) {
    let bookingsList = await fetch('/rest/bookings')
    bookingsList = await bookingsList.json()
    store.commit('setBookings', bookingsList)
  },
  async fetchShowings(store) {
    let showingsList = await fetch('/rest/showings')
    showingsList = await showingsList.json()
    store.commit('setShowings', showingsList)
  },
  async updateSeatsInBackend(store, showingObj) {
    let showing = {
      id: showingObj.id,
      title: showingObj.title,
      date: showingObj.date,
      theatre: showingObj.theatre,
      salon: showingObj.salon,
      time: showingObj.time,
      seats: showingObj.seats,
      totalSeats: showingObj.totalSeats
    }
    let response = await fetch('/rest/showings/' + showingObj.id, {
      method: 'PUT',
      body: JSON.stringify(showing)
    })
    showingObj = await response.json()
    store.commit('setShowings', showingObj)
  }
  // ------------- SPRINT 2 ------------
  // in-parameter is a user object user = {name: Anna, email: anna@gmail.com, password: Hej123}
  // Backend: need to use collection('Klass').insert(Object) to add a new 
  // addMemberToServer(store, newMember) {
  //   // Fetch url of the json file. Method = POST because we want to add something new to the json file in the server
  //   // Body = convert the object to a json object
  //   let response = await fetch('/rest/member', {
  //     method: 'POST',
  //     body: JSON.stringify(newMember)
  //   })
  //   // After the new member has been saved to the json file, get it again and commit to the state array -> members
  //   newMember = await response.json()
  //   store.commit('addMemberToState', newMember)
  // },
  // removeMemberFromServer(store, memberToDelete) {
  //   let response = await fetch('/rest/member', {
  //     method: 'DELETE',
  //     body: JSON.stringify(memberToDelete)
  //   })
  //   memberToDelete = await response.json()
  //   store.commit('removeMemberFromState', memberToDelete)
  // },
  // // Updates the member if they have added or removed a booking in My Page or Confirmed window
  // updateMemberInServer(store, updatedMember) {
  //   let response = await fetch('/rest/member', {
  //     method: 'PUT',
  //     body: JSON.stringify(updatedMember)
  //   })
  //   member = await response.json()
  //   store.commit('updateMemberInState', updatedMember)
  // },
}

export default createStore({ state, mutations, actions })