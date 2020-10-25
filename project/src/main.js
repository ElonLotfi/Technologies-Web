import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import restaurantList from "./components/restaurantList.vue";
import Restaurant from "./components/Restaurant.vue"
import AddRestaurant from "./components/AddRestaurant.vue"
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'



Vue.use(VueRouter)
Vue.use(Vuetify)



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
    },
    {
      path: '/Addrestaurant/',
      component: AddRestaurant
    }],
    mode: "history"

  }
)

new Vue({
  router,

  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
