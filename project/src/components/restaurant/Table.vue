<template>
  <v-app>
    <div v-if="this.nbrRestaurant > 0">
      <v-simple-table class="table">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="uper text-center">Nom</th>
              <th class="uper text-center">spécialité</th>
              <th class="uper text-center">Arrondissement</th>
              <th class="uper text-center">Code postal</th>

              <th class="uper text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(r, index) in restaurants" :key="index">
              <td>{{ r.name }}</td>
              <td>{{ r.cuisine }}</td>
              <td>{{ r.borough }}</td>
              <td>{{ r.address.zipcode }}</td>

              <td>
                <div>
                  <img
                    class="imageSpace image"
                    v-on:click="deleteRestaurant(r)"
                    src="https://img.icons8.com/nolan/64/delete-sign.png"
                    tag="button"
                  />
                  <router-link tag="button" :to="'/RestaurantDetail/' + r._id">
                    <img
                      class="image"
                      src="https://img.icons8.com/color/48/000000/opera-glasses.png"
                  /></router-link>
                </div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <div v-else>
      <h1 class="notfound">pas de restaurant disponible avec ce nom</h1>
    </div>
  </v-app>
</template>

<script>
export default {
  components: {},
  props: [
    "restaurants",
    "deleteRestaurant",
    "getRestaurantsFromServer",
    "nbrRestaurant",
  ],

  data() {
    return {};
  },
  methods: {
    getColor(index) {
      return index % 2 ? "white" : "#F0F0F2";
    },
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

.image {
  width: 30px;
  height: 30px;
}
.imageSpace {
  margin-right: 10px;
}
.notfound{
  text-align: center;
  margin-left: 70px;
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 25px;
  margin-top: -100px;
}
.uper{
   font-weight: lighter;
  text-transform: uppercase;
  font-size: 25px;
}
</style>