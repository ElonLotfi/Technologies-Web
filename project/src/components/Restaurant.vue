<template>
  <div>
    <form @submit.prevent="handleSubmit($event)">
      <md-table>
        <md-table-row>
          <md-table-head
            >nom
            <input name="nom" type="text" required v-model="restaurant.name" />
          </md-table-head>
        </md-table-row>

        <md-table-row>
          <md-table-head
            >cuisine
            <input
              name="cuisine"
              type="text"
              required
              v-model="restaurant.cuisine"
            />
          </md-table-head>
        </md-table-row>
        <md-table-row>
          <md-table-head
            >borough
            <input
              name="borough"
              type="text"
              required
              v-model="restaurant.borough"
            />
          </md-table-head>
        </md-table-row>
      </md-table>

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
      restaurant: {},
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