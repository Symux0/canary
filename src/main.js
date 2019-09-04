// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyCBxAQyLos9vn9qzfU0T_YjjLy0IjDa-3o',
  authDomain: 'canary-676cf.firebaseapp.com',
  databaseURL: 'https://canary-676cf.firebaseio.com',
  projectId: 'canary-676cf',
  storageBucket: '',
  messagingSenderId: '1030635092956',
  appId: '1:1030635092956:web:784d4ebf4a4d4aad'
}

firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
