<template>
  <div>
    <form @submit.prevent="handleSubmit($event)">
      <input name="nom" type="text" required v-model="restaurant.name" />
      <input name="cuisine" type="text" required v-model="restaurant.cuisine" />
      <input name="borough" type="text" required v-model="restaurant.borough" />

      <button>Modifier</button>
    </form>
  </div>
</template>

<script>
import { restaurantService } from "../services/restaurantService";

export default {
  name: "Restaurant",
  mounted() {
    this.fetchOneRestaurant();
  },
  data: function () {
    return {
      restaurant: {

      },
    };
  },

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
            console.log(res);
            this.fetchOneRestaurant();

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
    getValidationClass(fieldName) {
      const field = this.$v.restaurant[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty,
        };
      }
    },
  },
};
</script>