<template>
  <v-card class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <v-card-title >{{ restaurant.name }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="restaurant.grades['0'].score"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
           GRADE {{ restaurant.grades["0"].grade }}
        </div> </v-row
      ><br />
      <v-divider class="mx-4"></v-divider>

      <v-card-title>Cuisine : {{ restaurant.cuisine }}</v-card-title>
      <v-card-title>Adresse : </v-card-title>
      <div class="vcard">Arrondissement : {{ restaurant.borough }}</div>
      <div class="vcard"> bâtiment : {{ restaurant.address["building"] }}</div>
      <div class="vcard">street : {{ restaurant.address["street"] }}</div>
      <div class="vcard">street : {{ restaurant.address["zipcode"] }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <router-link class="btn success" tag="v-btn" :to="'/Restaurant/' + id"
        >Editer</router-link
      >
    </v-card-actions>
  </v-card>
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
      selection: 1,
      grades: {
        score: 0,
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
  margin-left: 127px;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100px;
  height: 50px;
  text-align: center;
}
.title {
  height: 30px;
  text-align: center;
  margin-top: 0px;
  width: 450px;
  margin-left: 600px;
  border-radius: 10px;
  color: white;
}
.vcard{
    margin-left: 17px;
}
</style>
