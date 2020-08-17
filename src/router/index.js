import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/booking/hall',
    name: 'Booking',
    component: () => import(/* webpackChunkName: "about" */ '../views/BookingHall.vue')
  },
  {
    path: '/booking/table',
    name: 'Booking',
    component: () => import(/* webpackChunkName: "about" */ '../views/BookingTable.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "about" */ '../views/Menu.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/admin/bookingslist/hall',
    name: 'AdminHall',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminHall.vue')
  },
  {
    path: '/admin/bookingslist/table',
    name: 'AdminTable',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminTable.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
