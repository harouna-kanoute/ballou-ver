//import vue
import Vue from 'vue'
import App from './App.vue'


//import vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

//import vue icon
import {BootstrapVueIcons} from  'bootstrap-vue'
Vue.use (BootstrapVueIcons)

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

//import components
import home from './components/home.vue'
import about from './components/about.vue'
import video from './components/video.vue'

const routes = [
  { path: '/', component: home },
  { path: '/home', component: home },
  { path: '/about', component: about },
  { path: '/video', component: video }
]


const router = new VueRouter({
  routes // raccourci pour `routes: routes`
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')