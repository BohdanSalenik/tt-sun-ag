import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Finance from '../views/Finance.vue'
import Realty from '../views/Realty.vue'
import Contacts from '../views/Contacts.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/finance',
    name: 'Finance',
    component: Finance
  },
  {
    path: '/realty',
    name: 'Realty',
    component: Realty
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/projects/:id?',
    name: 'Project',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectPage.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/PageNotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
