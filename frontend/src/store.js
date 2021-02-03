"use strict";

import { isVNode, vShow } from 'vue';
import { createStore } from 'vuex'

const state = {
  movies: [],
  member: null,
  bookings: [],
  showings: [],
  bookingInfo: [],
  genreFilterItem: [],
  showingsFilterItem: [],
  messages: []
}

const mutations = {
  setMovies(state, moviesList) {
    state.movies = moviesList;
  },
  setMember(state, member) {
    state.member = member;
    console.log(state.member)
  },

  logOutMember(state) {
    state.member = null;
  },
  setBookingInfo(store, bookingInfo) {
    store.bookingInfo = bookingInfo;
    console.log('store.bookingInfo', store.bookingInfo)

  },
  setShowings(state, showingsList) {
    state.showings = showingsList;
  },
  // Updates the show that has been changed so another user can get 'live updates' if seats are taken or not
  // after the tickets has been 'confirmed'
  updateShow(state, showObj) {
    const index = state.showings.indexOf(state.showings.filter(show => show.id == showObj.id)[0]);
    state.showings.splice(index, 1, showObj);
  },
  setMessages(state, messages) {
    state.messages = messages;
  },
  addMessage(state, message) {
    state.messages.push(message);
  },
  setBookings(state, bookingsList) {
    state.bookings = bookingsList;
  },
  removeBooking(state, booking) {
    const index = state.bookings.indexOf(state.bookings.filter(b => b.id == booking.id)[0]);
    state.bookings.splice(index, 1);
  },
  updateBookings(state, booking) {
    state.bookings.push(booking);
  }
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
    await fetch('/rest/showings/' + showingObj.id, {
      method: 'PUT',
      body: JSON.stringify(showing)
    })
  },
  async fetchMessages(store) {
    let messages = await fetch('/rest/messages')
    messages = await messages.json()
    store.commit('setMessages', messages)
  },
  async addNewMessage(store, message) {
    let response = await fetch('/rest/messages', {
      method: 'POST',
      body: JSON.stringify(message)
    })
    message = await response.json()
    store.commit('addMessage', message)
  },

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

  async createBookings(store, bookingObj) {
    let showingId = bookingObj.showing.id.toString()
    let tickets0 = bookingObj.tickets[0].title + ": " + bookingObj.tickets[0].value + ", "
    let tickets1 = bookingObj.tickets[1].title + ": " + bookingObj.tickets[1].value + ", "
    let tickets2 = bookingObj.tickets[2].title + ": " + bookingObj.tickets[2].value
    let totalSum = bookingObj.totalSum.toString()
    let seatIndexes = bookingObj.seatIndexes
    let seatIndexesString = '';
    for (let i = 0; i < seatIndexes.length; i++) {
      if (i == seatIndexes.length - 1) {
        seatIndexesString += "" + (seatIndexes[i] + 1)
      } else {
        seatIndexesString += "" + (seatIndexes[i] + 1) + ", "
      }
    }

    let tickets = tickets0 + tickets1 + tickets2;
    let userEmail = this.state.member.email
    console.log(userEmail)
    seatIndexes = seatIndexesString
    let booking = {
      showingId, tickets, seatIndexes, totalSum, userEmail
    }

    console.log("createBookings", JSON.stringify(booking))
    await fetch('/rest/bookings', {
      method: 'POST',
      body: JSON.stringify(booking)
    })
  },
  // delete booking 
  async deleteBooking(store, booking) {
    let response = await fetch('/rest/bookings/' + booking.id, {
      method: 'DELETE',
      body: JSON.stringify(booking)
    })
    booking = await response.json()
    store.commit('removeBooking', booking);
  },

  async login(store, credentials) {
    let member = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    })

    try {
      //member = state.members
      member = await member.json()
      console.log(member);
      store.commit('setMember', member)
    } catch {

      console.warn('Bad credentials');
    }
  },
  async register(store, credentials) {
    let member = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(credentials)
    })

    try {
      member = credentials;
      console.log(member);
      store.commit('setMember', member)
    } catch {
      console.warn('Bad credentials');
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