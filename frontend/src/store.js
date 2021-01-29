"use strict";

import { isVNode, vShow } from 'vue';
import { createStore } from 'vuex'

const state = {
  movies: [],
  member: null,
  bookings: [],
  showings: [],
  bookingInfo: [],
}

const mutations = {
  setMovies(state, moviesList) {
    state.movies = moviesList;
  },
  setMember(state, member) {
    state.member = member;
  },
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
      seats: showingObj.seats
    }
    let response = await fetch('/rest/showings/' + showingObj.id, {
      method: 'PUT',
      body: JSON.stringify(showing)
    })
  },
  async login(store, credentials) {
    let member = await fetch('/api/login', {
        method: 'POST', 
        body: JSON.stringify(credentials)
    })

    try {
        member = await member.json()
        console.log(member);
        store.commit('setMember', member)
    } catch {
        console.warn('Bad credentials');
        return false;
    }
},
async register(store, credentials) {
    let member = await fetch('/api/register', {
        method: 'POST', 
        body: JSON.stringify(credentials)
    })

    try {
        member = await member.json()
        console.log(member);
        store.commit('setMember', member)
    } catch {
        console.warn('Bad credentials');
        return false;
    }
},
async whoAmI(store) {
    let member = await fetch('/api/whoami')
    try {
        member = await member.json()
        console.log(member);
        store.commit('setMember', member)
    } catch {
        console.warn('Not logged in');
    }
},
 
}

export default createStore({ state, mutations, actions })