<template>
  <v-app>
    <div class="appback">
      <div class="bg">
        <div class="centre">
          <v-btn class="bb1" v-scroll-to="'#element'"
            >Details de restaurant</v-btn
          >

          <v-btn  class="bb" v-scroll-to="'#element1'">Adresse de restaurant </v-btn>
        </div>
      </div>

      <div id="element" class="fisrtElement">
        <v-card class="mx-auto my-12" max-width="700">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="200"
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          ></v-img>
          <div class="name">
            <v-card-title>{{ restaurant.name }}</v-card-title>
          </div>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <div class="rating">
                <v-rating
                  :value="5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
              </div>

              <div class="grey--text ml-4">GRADE 5</div> </v-row
            ><br />
            <v-divider class="mx-4"></v-divider>
            <div class="cuisine">
              <v-card-title>Cuisine : {{ restaurant.cuisine }}</v-card-title>
            </div>
            <div class="adresse">
              <v-card-title>Adresse : </v-card-title>
            </div>
            <div class="address1">
              <div class="vcard">Arrondissement : {{ restaurant.borough }}</div>
              <div class="vcard">
                bâtiment : {{ restaurant.address.building }}
              </div>
              <div class="vcard">rue : {{ restaurant.address.street }}</div>
              <div class="vcard">
                code postal : {{ restaurant.address.zipcode }}
              </div>
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <div class="btnValider">
            <v-card-actions>
              <router-link
                class="btn success"
                tag="v-btn"
                :to="'/Restaurant/' + id"
                >Editer</router-link
              >
            </v-card-actions>
          </div>
        </v-card>
      </div>
      <div id="element1" class="secondElement">
        <div class="bg1">
          <v-row align="center" justify="center">
            <v-col class="vcol text-center" cols="12">
              <h1 class="test1 display-1 font-weight-thin mb-4">
                Adresse du restaurant
              </h1>
            </v-col>
          </v-row>
        </div>
        <div class="map">
          <GmapMap
            :center="{ lat: rLat, lng: rLng }"
            :zoom="7"
            map-type-id="terrain"
            style="width: 600px; height: 400px"
          >
          </GmapMap>
        </div>
      </div>
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
      this.rLat = 40.6661671;

      console.log(this.rLat);
    },

    getLngRestaurant() {
      this.rLng = this.restaurant.address.coord[1];
      this.rLng = -74.1136198;
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
.diiv2 {
  margin-right: 400px;
}

.information {
  margin-left: 400px;
  margin-top: -410px;
}

.table {
  text-align: center;
  margin-top: 10px;
  width: 450px;
  margin-left: 380px;
  border-radius: 10px;
  color: white;
}
.info {
  border-radius: 10px;
  width: 250px;
  text-align: center;
  color: white;
  margin-left: 50px;
  margin-bottom: 70px;
}
.info1 {
  border-radius: 10px;
  width: 350px;
  text-align: center;
  color: white;
  margin-left: 250px;
  margin-bottom: 10px;
  height: 1000px;
}
.vp1 {
  width: 400px;
}
.vp2 {
  width: 400px;
  margin-left: 600px;
  margin-top: -420px;
  height: 1000px;
}
.bg {
  background: url("https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 650px;
}
.vcol {
  color: white;
  margin-top: 50px;
  size: 300px;
}
.bg1 {
  /* The image used */
  background-image: url("https://images.unsplash.com/photo-1524491561693-20766fdcd934?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");

  /* Full height */
  height: 250px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.map {
  margin-left: 320px;
  margin-top: 3px;
  margin-bottom: 20px;
}
.bttn1 {
  margin-top: 200px;
}
.bttn {
  margin-top: 50px;
}
.appback {
  background-color: #f9f9fa;
}
.rating {
  margin-left: 270px;
}
.name {
  margin-left: 270px;
}
.cuisine {
  margin-left: 230px;
}
.adresse {
  margin-left: 260px;
}
.address1 {
  margin-left: 220px;
}
.btnValider {
  margin-left: 170px;
}
.test1 {
  margin-top: 50px;
  font-size: 600px;
}
.centre {
  text-align: center;
  padding-top: 300px;
}
.bb {
  position: relative;
  padding: 12px 36px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 40px;
  background: linear-gradient(90deg,#755b,#55e7fc);

}
.bb1 {
  margin-right: 50px;
  position: relative;
  padding: 12px 36px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 40px;
  background: linear-gradient(90deg,#755b,#55e7fc);

}
.fisrtElement {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 700px;
}
.secondElement {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 620px;
}
</style>
