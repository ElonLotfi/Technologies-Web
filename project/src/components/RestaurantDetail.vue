<template>
  <v-app>

    <div class="map">
        <h1 class="info deep-purple accent-4">Adresse</h1>
        <GmapMap
          :center="{ lat: rLat, lng: rLng }"
          :zoom="7"
          map-type-id="terrain"
          style="width: 350px; height: 300px"
        >
        </GmapMap>

    </div>

    <div class="information">
              <h1 class="info1 deep-purple accent-4">détail du restaurant</h1>


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
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          ></v-img>
          <v-card-title>{{ restaurant.name }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ml-4">GRADE 5</div> </v-row
            ><br />
            <v-divider class="mx-4"></v-divider>

            <v-card-title>Cuisine : {{ restaurant.cuisine }}</v-card-title>
            <v-card-title>Adresse : </v-card-title>
            <div class="vcard">Arrondissement : {{ restaurant.borough }}</div>
            <div class="vcard">
              bâtiment : {{ restaurant.address.building }}
            </div>
            <div class="vcard">rue : {{ restaurant.address.street }}</div>
            <div class="vcard">
              code postal : {{ restaurant.address.zipcode }}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <router-link
              class="btn success"
              tag="v-btn"
              :to="'/Restaurant/' + id"
              >Editer</router-link
            >
          </v-card-actions>
        </v-card>

    </div>

  
  </v-app>
</template>

<script>
import { restaurantService } from "../services/restaurantService";

export default {
  components: {},
  mounted() {
    this.fetchOneRestaurant();
  },

  data: () => ({
    valid: true,
    name: "",
    rLat: "",
    rLng: "",
    restaurant: {
      address: {
        street: "",
        building: "",
        zipcode: "",
        coord: {
          0: "",
          1: "",
        },
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
            this.getLatRestaurant();
            this.getLngRestaurant();
          });
        });
    },

    getLatRestaurant() {
      this.rLat = this.restaurant.address.coord[0];
      console.log(this.rLat);
    },

    getLngRestaurant() {
      this.rLng = this.restaurant.address.coord[1];
      console.log(this.rLng);
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
.vcard {
  margin-left: 17px;
}
.diiv2{
  margin-right: 400px;
}

.information{
  margin-left: 400px;
  margin-top: -410px;
}
.map{
  margin-left: 100px;
  margin-top: 100px;
}
.table {
  text-align: center;
  margin-top: 10px;
  width: 450px;
  margin-left: 380px;
  border-radius: 10px;
  color: white;
}
.info{
  border-radius: 10px;
  width: 250px;
  text-align: center;
  color: white;
  margin-left: 50px;
  margin-bottom: 70px;
  
}
.info1{
  border-radius: 10px;
  width: 350px;
  text-align: center;
  color: white;
  margin-left: 250px;
  margin-bottom: 10px;
  
}
</style>
