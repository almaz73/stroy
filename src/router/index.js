import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Menu from '@/components/Menu'
import Contact from '@/components/Contact'
import Mortgage from '@/components/Mortgage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/martgage',
      name: 'Mortgage',
      component: Mortgage
    }
  ]
})
