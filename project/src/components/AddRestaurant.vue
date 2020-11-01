<template>
  <v-app
    ><br />
    <h1 class="table deep-purple accent-4">Ajouter un restaurant</h1>

    <br /><br />

    <div class="form">
      <form @submit.prevent="handleSubmit($event)">
        <v-text-field
          class="test"
          v-model="restaurant.name"
          :counter="50"
          label="nom"
          required
          tag="input"
          name="nom"
        ></v-text-field>

        <v-text-field
          class="test"
          v-model="restaurant.cuisine"
          :counter="50"
          label="cuisine"
          required
          tag="input"
          name="cuisine"
        ></v-text-field>
        <v-text-field
          class="test"
          v-model="restaurant.borough"
          :counter="50"
          label="Arrondissement"
          required
          tag="input"
          name="borough"
        ></v-text-field>

        <v-text-field
          class="test"
          :counter="50"
          label="bâtiment"
          required
          tag="input"
          name="building"
        ></v-text-field>
        <v-text-field
          class="test"
          v-model="restaurant.address['street']"
          :counter="50"
          label="rue"
          required
          tag="input"
          name="street"
        ></v-text-field>

        <v-text-field
          class="test"
          v-model="restaurant.address['zipcode']"
          :counter="50"
          label="code postal"
          required
          tag="input"
          name="zipcode"
        ></v-text-field>

        <v-btn type="submit" color="success btn"> Valider </v-btn>
      </form>
    </div>
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
        address: {},
      },
    };
  },

  methods: {
    // REQUETES PUT

    handleSubmit(event) {
      try {
        restaurantService.addRestaurant(event).then((responseJSON) => {
          responseJSON.json().then((res) => {
            console.log("the service of adding resto work also ! " + res.msg);
            this.$vToastify.success("Le restaurant est bien ajouté");

            window.history.go(-1);
          });
        });
      } catch (error) {
        console.log("error.msg");
      }
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
  margin-left: 380px;
  border-radius: 10px;
  color: white;
}
.btn {
  margin: 0 auto;
  margin-left: 560px;
  margin-bottom: 100px;
  width: 100px;
  height: 50px;
  text-align: center;
}
.form {
  height: 200px;
}
</style>
