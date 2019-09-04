import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Features from '@/components/Features'
import ContactUs from '@/components/ContactUs'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Account from '@/components/Account'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/features',
      name: Features,
      component: Features
    },
    {
      path: '/contactus',
      name: ContactUs,
      component: ContactUs
    },
    {
      path: '/signin',
      name: SignIn,
      component: SignIn
    },
    {
      path: '/signup',
      name: SignUp,
      component: SignUp
    },
    {
      path: '/account/:name',
      name: Account,
      component: Account
    }
  ]
})
