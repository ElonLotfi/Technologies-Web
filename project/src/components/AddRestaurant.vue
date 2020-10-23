<template>
  <div>
    <form @submit.prevent="handleSubmit($event)">
      <input name="nom" type="text" required v-model="restaurant.nom" />
      <input name="cuisine" type="text" required v-model="restaurant.cuisine" />

      <v-text-field
        class="test"
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

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
  width: 600px;
  margin: 0 auto;
  background-color: #ff9500;
  padding: 0 20px 20px 20px;
}
</style>