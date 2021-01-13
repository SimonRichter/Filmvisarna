import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Movies from './views/Movies.vue'
import ChosenMovie from './views/ChosenMovie.vue'
import Booking from './views/Booking.vue'
import SignIn from './views/SignIn.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Movies',
    // för att skicka med dynamisk id till annan url sida
    // så behöver man lägga till i path: '...+ :id'
    path: '/movies/',
    component: Movies
  },
  {
    name: 'ChosenMovie',
    path: '/chosen-movie/:id',
    component: ChosenMovie
  },
  {
    name: 'SignIn',
    path: '/sign-in/',
    component: SignIn
  },
  {
    name: 'Booking',
    path: '/booking/:id',
    component: Booking
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})