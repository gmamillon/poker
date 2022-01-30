import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewTour from '../views/NewTour.vue'
import Table from '../views/Table.vue'

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
    path: '/new-tournament',
    name: 'NewTour',
    component: NewTour
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
