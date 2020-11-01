import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuefaker from 'vue-faker'

import restaurantList from "./components/restaurantList.vue";
import Restaurant from "./components/Restaurant.vue"
import AddRestaurant from "./components/AddRestaurant.vue"
import RestaurantDetail from "./components/RestaurantDetail"
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueToastify from "vue-toastify";
import * as GmapVue from 'gmap-vue'






Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(VueToastify);
Vue.use(vuefaker);
Vue.use(GmapVue, {
  load: {
    key: 'AIzaSyAi5Vi3-s_9g2b_0V8RgE41aGsuzAyL9k8',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
  installComponents: true
})





// defenir les route

const router = new VueRouter(
  {
    routes: [{
      path: '/home',
      component: restaurantList
    },
    {
      path: '/Restaurant/:id',
      component: Restaurant
    },
    {
      path: '/Addrestaurant/',
      component: AddRestaurant
    },


    {
      path: '/RestaurantDetail/:id',
      component: RestaurantDetail
    }],
    mode: "history"

  }
)

new Vue({
  router,

  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
