<template>
  <v-app>
    <div class="bg">
      <v-row align="center" justify="center">
        <v-col class="vcol text-center" cols="12">
          <v-btn class="bttn1" v-scroll-to="'#element'"
            >Mise à jour du Restaurant</v-btn
          >
        </v-col>
      </v-row>
    </div>

    <div class="backgroundFormulaire">
      <div class="formulaire" id="element">
        <div class="form">
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

            <v-btn type="submit" color="btn"> Valider </v-btn>
          </form>
        </div>
      </div>
    </div>
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
      this.restaurantService.editRestaurant(event, this.id);
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
.bg {
  /* The image used */
  background: url("https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 570px;
}

.bttn1 {
  margin-top: 250px;

  position: relative;
  padding: 12px 36px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 40px;
  background: linear-gradient(90deg, #755b, #55e7fc);
}
.formulaire {
  
  margin-top: 50px;
  width: 460px;
  margin-left: 480px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 400px;
}
.btn {
  margin: 0 auto;
  margin-left: 189px;
  margin-bottom: 100px;
  width: 100px;
  height: 50px;
    margin-top: -34px;

   position: relative;
  padding: 12px 36px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 40px;
  background: linear-gradient(90deg, #755b, #55e7fc);
}
</style>
