"use strict";

import { createStore } from 'vuex'

const state = {
  movies: [],
  members: [],
  bookings: []
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
  },
  removeMemberFromState(store, memberToDelete) {
    const index = store.members.indexOf(memberToDelete.email)
    if (index > -1) {
      store.members.splice(index, 1)
    }
  },
  updateMemberInState(store, updatedMember) {
    const index = store.members.indexOf(updatedMember.email)
    if (index > -1) {
      // Remove the old member object with the new
      store.members.splice(index, 1, updatedMember)
    }
  }
}

const actions = {
  async fetchMovies(store) {
    let moviesList = await fetch('/rest/movie')
    moviesList = await moviesList.json()
    store.commit('setMovies', moviesList)
  },
  async fetchBookings(store) {
    let bookingsList = await fetch('/rest/booking')
    bookingsList = await bookingsList.json()
    store.commit('setBookings', bookingsList)
  }
}

export default createStore({ state, mutations, actions })