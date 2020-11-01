<template>
  <v-app>
    <div id="app" v-if="this.nbrRestaurant > 0">
      
      <v-simple-table class="table">
        <template v-slot:default>
          <thead>
            <tr >
              <th class="text-center">Name</th>
              <th class="text-center">Cuisine</th>
              <th class="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(r, index) in restaurants" :key="index" :style="{backgroundColor:getColor(index)}">
              <td >{{ r.name }}</td>
              <td>{{ r.cuisine }}</td>
              <td>
                <v-icon v-on:click="deleteRestaurant(r)" class="icon"
                  >delete</v-icon
                >

                <router-link tag="button" :to="'/RestaurantDetail/' + r._id">
                  <v-icon class="icon">remove_red_eye</v-icon></router-link
                >
              </td>
            </tr>
          </tbody>
      
        </template>
      </v-simple-table>
    </div>
    <div v-else>
      <h1 class="htitre deep-purple accent-4">aucun restaurant disponible</h1>
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
  methods :{
    getColor(index) {
                return (index % 2) ? 'white' : '#F0F0F2';
            }
  }
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
  margin-left: -240px;
  width: 1400px;
  border-radius: 10px;
}
.htitre {
  text-align: center;
  margin-top: 0px;
  width: 450px;
  margin-left: 180px;
  border-radius: 10px;
  color: white;
}
.v-data-table-header th {
  white-space: nowrap;
}
</style>