<template>
  <v-app
    ><br />

    <h1 class="title deep-purple accent-4">Modifier un restaurant</h1>
    <br /><br />
    <form @submit.prevent="handleSubmit($event)">
      <v-text-field
        class="test"
        v-model="restaurant.name"
        :counter="50"
        label="nom"
        required
        name="nom"
      ></v-text-field>

      <v-text-field
        class="test"
        v-model="restaurant.cuisine"
        :counter="50"
        label="cuisine"
        required
        name="cuisine"
      ></v-text-field>
      <v-text-field
        class="test"
        v-model="restaurant.borough"
        :counter="50"
        label="Arrondissement"
        required
        name="borough"
      ></v-text-field>

      <v-text-field
        class="test"
        :counter="50"
        v-model="restaurant.address['building']"
        label="bâtiment"
        required
        name="building"
      ></v-text-field>
      <v-text-field
        class="test"
        v-model="restaurant.address['street']"
        :counter="50"
        label="rue"
        required
        name="street"
      ></v-text-field>

      <v-text-field
        class="test"
        v-model="restaurant.address['zipcode']"
        :counter="50"
        label="code postal"
        required
        name="zipcode"
      ></v-text-field>

      <v-btn type="submit" color="success btn"> Valider </v-btn>
    </form>
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
    restaurant: {
      address: {},
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
      this.restaurantService.editRestaurant(event,this.id);
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
.title {
  height: 30px;
  text-align: center;
  margin-top: 0px;
  width: 450px;
  margin-left: 600px;
  border-radius: 10px;
  color: white;
}
</style>
