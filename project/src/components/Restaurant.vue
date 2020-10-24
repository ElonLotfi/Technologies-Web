<template>
  <v-app
    ><br />
    <h1 class="table">Modifer le restaurant</h1>
    <br /><br />
    <v-form ref="form" @submit.prevent="handleSubmit($event)" lazy-validation>
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

      <v-btn type="submit"  color="success btn" class="mr-4">
        Validate
      </v-btn>
    </v-form>
  </v-app>
</template>

<script>
import { restaurantService } from "../services/restaurantService";

export default {
  mounted() {
    this.fetchOneRestaurant();
  },
  data: () => ({
    valid: true,
    name: "",

    restaurant: {
      address: {
        street: null,
        building: null,
        zipcode: null,
      },
     

    },
  }),
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    // REQUETES PUT
    handleSubmit() {
      restaurantService
        .editRestaurant(event, this.id)
        .then((responseJSON) => {
          responseJSON.json().then((res) => {
            this.fetchOneRestaurant();
            console.log(res);
            
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async fetchOneRestaurant() {
      await restaurantService
        .fetchOneRestaurants(this.id)
        .then((responseJSON) => {
          responseJSON.json().then((res) => {
            console.log(res.restaurant);
            this.restaurant = res.restaurant;
          });
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
