<template>
  <div>
    <form @submit.prevent="handleSubmit($event)">
      <br /><br /><br /><br /><br />

      <h1>Ajouter un restaurant</h1>

      <v-container fluid>
        <v-row align="center">
          <v-col class="d-flex" cols="12" sm="6">
            <v-text-field
              class="test"
              v-model="restaurant.nom"
              :counter="10"
              label="nom"
              required
            ></v-text-field>
          </v-col>
          <v-col class="d-flex" cols="12" sm="6">
            <v-text-field
              class="test"
              v-model="restaurant.cuisine"
              :counter="10"
              label="cuisine"
              required
            ></v-text-field>
          </v-col>

          <v-col class="d-flex" cols="12" sm="6">
            <v-text-field
              class="test"
              v-model="restaurant.borough"
              :counter="10"
              label="arrondissement"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <p>address</p>
      <v-container fluid>
        <v-row align="center">
          <v-col class="d-flex" cols="12" sm="6">
            <v-text-field
              class="test"
              v-model="restaurant.building"
              :counter="10"
              label="bâtiment"
              required
            ></v-text-field>
          </v-col>

          <v-col class="d-flex" cols="12" sm="6">
            <v-text-field
              class="test"
              v-model="restaurant.street"
              :counter="10"
              label="rue"
              required
            ></v-text-field>
          </v-col>

          <v-col class="d-flex" cols="12" sm="6">
            <v-text-field
              class="test"
              v-model="restaurant.zipcode"
              :counter="10"
              label="code postal"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <button>Ajouter</button>
    </form>
  </div>
</template>

<script>
import { restaurantService } from "../services/restaurantService";

export default {
  name: "Restaurant",
  mounted() {},
  data: function () {
    return {
      restaurant: {},
    };
  },

  methods: {
    // REQUETES PUT

    handleSubmit(event) {
      restaurantService
        .addRestaurant(event)
        .then((responseJSON) => {
          responseJSON.json().then((res) => {
            console.log("done !");
            console.log(res.msg);
            //this.getRestaurantsFromServer(); // mise a jour de la vue
          });
        })
        .catch((err) => {
          console.log(err.msg);
        });
    },
  },
};
</script>

<style scoped>
.test {
  margin-top: 600 px;
  width: 600px;
  margin: 0 auto;
  background-color: white;
  padding: 0 20px 20px 20px;
}
</style>