import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//Components
import restaurantList from "./components/restaurant/restaurantList.vue";
import Restaurant from "./components/restaurant/Restaurant.vue"
import AddRestaurant from "./components/restaurant/AddRestaurant.vue"
import RestaurantDetail from "./components/restaurant/RestaurantDetail"
import home from "./components/home/Home"
import Menu from "./components/menuRestaurant/Menu.vue"
import Team from "./components/team/Team.vue"
import Summary from "./components/order/Summary.vue"
import Basket from "./components/order/Basket.vue"

// Les imports
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

//Les icons de material-design
import 'material-design-icons-iconfont/dist/material-design-icons.css'



// vue resource

import VueResource from 'vue-resource';

Vue.use(VueResource)


// Scroll
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);


// Notification
var toastrConfigs = {
  position: 'top right',
  showDuration: 2000
}
Vue.use(CxltToastr, toastrConfigs)




// Router
Vue.use(VueRouter)
// Graphic
Vue.use(Vuetify)



// map Integration 

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAi5Vi3-s_9g2b_0V8RgE41aGsuzAyL9k8',

  },


})


// defenir les route

const router = new VueRouter(
  {
    routes: [{
      path: '/home',
      component: restaurantList
    },
    {
      path: '/Team',
      component: Team
    },
    {
      path: '/Summary',
      component: Summary
    },
    {
      path: '/Basket',
      component: Basket
    },
    {
      path: '/',
      component: home
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
      path: '/Menu',
      component: Menu
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
