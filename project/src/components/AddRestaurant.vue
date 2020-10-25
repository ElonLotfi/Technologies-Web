<template>
  <v-app
    ><br />
    <h1 class="table deep-purple accent-4">Ajouter le restaurant</h1>

    <br /><br />
    <v-form @submit.prevent="handleSubmit($event)">
      <v-text-field
        class="test"
        v-model="restaurant.name"
        :counter="50"
        label="nom"
        required
      ></v-text-field>

      <v-text-field
        class="test"
        v-model="restaurant.cuisine"
        :counter="50"
        label="cuisine"
        required
      ></v-text-field>

      <v-text-field
        class="test"
        v-model="restaurant.borough"
        :counter="50"
        label="arrondissement"
        required
      ></v-text-field>

      <p class="table">Adresse</p>
      <v-text-field
        class="test"
        v-model="restaurant.address['building']"
        :counter="50"
        label="bâtiment"
        required
      ></v-text-field>
      <v-text-field
        class="test"
        v-model="restaurant.address['street']"
        :counter="50"
        label="rue"
        required
      ></v-text-field>
      <v-text-field
        class="test"
        v-model="restaurant.address['zipcode']"
        :counter="50"
        label="code postal"
        required
      ></v-text-field>

      <v-btn type="submit" color="success btn"> Validate </v-btn>
    </v-form>
  </v-app>
</template>

<script>
import { restaurantService } from "../services/restaurantService";

export default {
  name: "Restaurant",
  mounted() {},
  data: function () {
    return {
      restaurant: {
        address: {
          street: null,
          building: null,
          zipcode: null,
        },
      },
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
  width: 600px;
  margin: 0 auto;
  background-color: white;
  padding: 0 50px 50px 50px;
}

.description {
  margin: 0 auto;
  width: 100px;
}
.router {
  color: white;
  display: inline-block;
  margin: 0 1%;
  width: 100px;
  height: 50px;
}
.table {
  text-align: center;
  margin-top: 0px;
  width: 450px;
  margin-left: 600px;
  border-radius: 10px;
  color: white;
}
.btn {
  margin: 0 auto;
  margin-left: 747px;
  margin-bottom: 100px;
  width: 100px;
  height: 50px;
  text-align: center;
}
</style>
