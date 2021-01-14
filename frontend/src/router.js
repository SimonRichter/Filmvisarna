import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Movies from './views/Movies.vue'
import ChosenMovie from './views/ChosenMovie.vue'
import ConfirmationPage from './views/ConfirmationPage.vue'
import Booking from './views/Booking.vue'
import SignIn from './views/SignIn.vue'
import MyPage from './views/MyPage.vue'


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
    name: 'ConfirmationPage',
    path: '/confirmation-page/:id',
    component: ConfirmationPage
  },
  {
    name: 'SignIn',
    path: '/sign-in/',
    component: SignIn
  },
  {
    name: 'MyPage',
    path: '/my-page/',
    component: MyPage
  },
  {
    name: 'Booking',
    path: '/chosen-movie/:title/booking',
    component: Booking
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})