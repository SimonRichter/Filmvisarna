import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Movies from './views/Movies.vue'
import ChosenMovie from './views/ChosenMovie.vue'
import ConfirmationPage from './views/ConfirmationPage.vue'
import Booking from './views/Booking.vue'
import About from './views/About.vue'
import MyPage from './views/MyPage.vue'
import Faq from './views/FAQ.vue'
import OurCinemas from './views/OurCinemas.vue'

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
    path: '/chosen-movie/:title',
    component: ChosenMovie
  },
  {
    name: 'ConfirmationPage',
    path: '/confirmation-page/:showingId',
    component: ConfirmationPage
  },
  {
    name: 'MyPage',
    path: '/my-page',
    component: MyPage
  },
  {
    name: 'Booking',
    path: '/chosen-movie/:title/booking/:id',
    component: Booking
  },
  {
    name: 'About',
    path: '/about',
    component: About
  },
  {
    name: 'OurCinemas',
    path: '/ourcinemas',
    component: OurCinemas
  },

  {
    name: 'FAQ',
    path: '/faq',
    component: Faq
  }
]

export default createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0 }
  },
  history: createWebHistory(),
  routes
})