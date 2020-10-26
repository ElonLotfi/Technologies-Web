<template>
  <v-app>
    <div v-if="this.nbrRestaurant > 0">
      <v-simple-table class="">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Cuisine</th>
              <th class="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(r, index) in restaurants" :key="index">
              <td>{{ r.name }}</td>
              <td>{{ r.cuisine }}</td>
              <td>
                <v-icon v-on:click="deleteRestaurant(r)" class="icon"
                  >delete</v-icon
                >

                <router-link tag="icon" :to="'/RestaurantDetail/' + r._id">
                  <v-icon class="icon">remove_red_eye</v-icon></router-link
                >
              </td>
            </tr>
          </tbody>
      
        </template>
      </v-simple-table>
    </div>
    <div v-else>
      <h1 class="table deep-purple accent-4">aucun restaurant disponible</h1>
    </div>
  </v-app>
</template>

<script>
export default {
  components: {
  },
  props: [
    "restaurants",
    "deleteRestaurant",
    "getRestaurantsFromServer",
    "nbrRestaurant",
    
  ],

  data() {
    return {};
  },
};
</script>

<style scoped>
.router {
  color: white;
  display: inline-block;
  margin: 0 1%;
  width: 100px;
  height: 50px;
}

.group {
  display: flex;
  flex: 1;
  justify-content: space-around;
}
.table {
  text-align: center;
  margin-top: 0px;
  width: 450px;
  margin-left: 400px;
  border-radius: 10px;
  color: white;
}
</style>