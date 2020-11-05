<template>
  <v-app>
    <div class="appback">
      <div class="bg">
        <div class="centre">
          <v-btn class="bb1" v-scroll-to="'#element'"
            >Details de restaurant</v-btn
          >

          <v-btn class="bb" v-scroll-to="'#element1'"
            >Adresse de restaurant
          </v-btn>

          <v-btn class="bb1" v-scroll-to="'#element3'"
            >Menu de Restaurant</v-btn
          >
        </div>
      </div>

      <div id="element" class="fisrtElement">
        <div class="restaurantName">
          <h4>{{ restaurant.name }}</h4>
        </div>
        <div class="restaurantImage">
          <v-img
            src="https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ></v-img>
        </div>
        <div class="rating">
          <v-rating
            :value="this.score1"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
        </div>
        <div class="Grade">
          Grade
          <div class="colorGrade">{{ this.score1 }}</div>
        </div>

        <div class="Score">
          Score
          <p class="colorGrade">{{ this.grade1 }}</p>
        </div>

        <div class="cuisineType">Spécialité : {{ restaurant.cuisine }}</div>

        <div class="batiment">bâtiment : {{ restaurant.address.building }}</div>

        <div class="rue">Rue : {{ restaurant.address.street }}</div>
        <div class="arrondissement">
          Arrondissement : {{ restaurant.borough }}
        </div>

        <div class="codePostal">
          Code postal : {{ restaurant.address.zipcode }}
        </div>

        <div class="finalButton">
          <router-link class="warning" tag="v-btn" :to="'/Restaurant/' + id"
            >Editer</router-link
          >
        </div>
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
          <div class="map">
            <GmapMap
              v-bind:center="{
                lat: this.pos1,
                lng: this.pos2,
              }"
              v-bind:zoom="3"
              map-type-id="terrain"
              style="height: 400px"
            >
              <GmapMarker
                v-bind:position="{
                  lat: this.pos1,
                  lng: this.pos2,
                }"
                v-bind:clickable="true"
              />
            </GmapMap>
          </div>
        </div>
      </div>

      <div id="element3" class="secondElement">
        <Menu></Menu>
      </div>
    </div>
  </v-app>
</template>

<script>
import { restaurantService } from "../services/restaurantService";
import Menu from "../menuRestaurant/Menu";

export default {
  components: { Menu },
  mounted() {
    this.fetchOneRestaurant();
  },

  data: () => ({
    valid: true,
    name: "",
    cuisine: "",

    restaurant: {
      address: {
        street: "",
        building: "",
        zipcode: "",
        coord: {},
      },
      selection: 1,
      grades: {
        score: "",
        grade: "",
      },
    },

    center: {
      lat: null,
      lng: null,
    },
    score1: Math.floor(Math.random() * 10),
    grade1: "B",

    pos1: Math.random() * (120.12 - 1.888) + 1.888,
    pos2: Math.random() * (120.12 - 1.888) + 1.888,

    markers: [
      {
        position: {
          lat: null,
          lng: null,
        },
      },
    ],
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
            if (res.restaurant.grades["0"].score !== null) {
              this.score1 = res.restaurant.grades["0"].score;
              this.grade1 = res.restaurant.grades["0"].grade;
            }
            if (this.restaurant.address.coord[0] !== null) {
              this.pos1 = this.restaurant.address.coord[0];
              this.pos2 = this.restaurant.address.coord[1];
            }

            // this.markers[0].lat =10;
            // this.markers[0].lng = 10;
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
  height: 183px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.map {
  margin-left: 10px;
  margin-right: 10px;

  margin-top: 40px;
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
  margin-top: 24px;
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 25px;
  margin-left: 20px;
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
  background: linear-gradient(90deg, #755b, #55e7fc);
  margin-right: 50px;
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
  background: linear-gradient(90deg, #755b, #55e7fc);
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
.restaurantName {
  text-align: center;
  text-transform: uppercase;

  margin-top: 7px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: black;
  font-size: 25px;
  font-weight: 200;
}

.rating {
  margin-left: 640px;
}
.Grade {
  text-align: center;
  margin-top: 10px;
  margin-left: 20px;
  font-weight: lighter;
  font-size: larger;
  text-transform: uppercase;
  font-size: 25px;
}
.Score {
  text-align: center;
  margin-top: 5px;
  margin-left: 20px;
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 25px;
}
.restaurantImage {
  overflow: hidden;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  width: 400px;
  height: 200px;
  margin-left: 480px;
  margin-top: 10px;
  text-align: center;
}
.cuisineType {
  margin-top: -12px;
  text-align: center;
  font-weight: lighter;
  margin-left: 40px;
    text-transform: uppercase;

}
.arrondissement {
  margin-top: 5px;
    text-transform: uppercase;

  text-align: center;
  font-weight: lighter;
  margin-left: 40px;
}
.batiment {
  margin-top: 5px;
    text-transform: uppercase;

  text-align: center;
  font-weight: lighter;
  margin-left: 28px;
}
.rue {
  margin-top: 5px;
  text-align: center;
  font-weight: lighter;
  margin-left: 29px;
    text-transform: uppercase;

}

.codePostal {
  margin-top: 5px;
    text-transform: uppercase;

  text-align: center;
  font-weight: lighter;
  margin-left: 29px;
}
.colorGrade {
  color: #42bfd0;
}
.finalButton {
  text-align: center;
  margin-top: 15px;
  margin-left: 32px;
}

.title h4 {
  text-transform: capitalize;
  font-size: 36px;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
}
.title h4 span p {
  display: block;
  font-size: 18px;
  font-style: italic;
  margin-bottom: -10px;
}
.title h4:before {
  position: absolute;
  content: "";
  width: 100px;
  height: 2px;
  background-color: #20bcff;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
