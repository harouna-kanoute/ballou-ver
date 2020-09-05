import Vue from 'vue'
import App from './App.vue'

// import vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//import bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

import home from './components/home.vue'
import about from './components/about.vue'

const routes = [
  { path: '/home', component: home },
  { path: '/about', component: about }
]


const router = new VueRouter({
  routes // raccourci pour `routes: routes`
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')