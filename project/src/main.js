import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'
import restaurantList from "./components/restaurantList.vue";
import Restaurant from "./components/Restaurant.vue"



Vue.use(VueMaterial)
Vue.use(VueRouter)



// defenir les route

const router = new VueRouter(
  {
    routes: [{
      path: '/',
      component: restaurantList
    },
    {
      path: '/Restaurant/:id',
      component: Restaurant
    }],
    mode :"history"

  }
)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
