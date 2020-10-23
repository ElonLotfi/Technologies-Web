<template>
  <v-app>
    <div class="vapp">
      <v-container class="grey lighten-5">
        <v-row>
          <v-col>
            <v-card class="search" outlined tile>
              {{ this.nbrRestaurant }} - {{ this.nbrPage }} - {{ pageSize }}
            </v-card>
          </v-col>

          <v-spacer></v-spacer>          <v-spacer></v-spacer>


          <v-col>
            <v-card class="search" outlined tile>
              <v-text-field
              class="search"
                v-model="nameSearch"
                flat
                hide-details
                label="Chercher"
                @input="searchRestaurant()"
                prepend-inner-icon="mdi-magnify"
                solo-inverted
              ></v-text-field>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <br /><br />
      <br /><br />

      <br /><br />

      <div class="stylo">
        <v-slider
          class="test"
          min="5"
          max="100"
          value="5"
          @input="getRestaurantsFromServer()"
          v-model="pageSize"
          thumb-label="always"
        ></v-slider>
        <br /><br />
      </div>

      <Table
        v-bind:restaurants="this.restaurants"
        v-bind:deleteRestaurant="deleteRestaurant"
      ></Table>
    </div>
  </v-app>
</template>

<script>
import Table from "./Table";
import _ from "lodash";
import { restaurantService } from "../services/restaurantService";
export default {
  name: "restaurantList",
  components: {
    Table,
  },
  props: {
    msg: String,
    restaurant: Array,
    nameToSearch: String,
  },
  data: function () {
    return {
      restaurants: [],
      nom: "", // ici pour ajouter un restaurant
      cuisine: "", // ici pour ajouter un restaurant
      nbrRestaurant: 0,
      currentPage: 0,
      pageSize: 10,
      nbrPage: 0, // ici le nombre de page total
      nameSearch: "",
    };
  },

  mounted() {
    console.log("avant rendu !");
    this.getRestaurantsFromServer();
  },
  methods: {
    async getRestaurantsFromServer() {
      try {
        await restaurantService
          .fetchRestaurants(this.currentPage, this.pageSize, this.nameSearch)
          .then((responseJSON) => {
            responseJSON.json().then((res) => {
              // console.log("the service work also ! " + res.msg);
              console.log(res.data);
              this.restaurants = res.data;
              this.nbrRestaurant = res.count;
              this.nbrPage = Math.round(this.nbrRestaurant / this.pageSize);
            });
          });
      } catch (error) {
        console.log("error man");
      }
    },
    nextPage() {
      // il manque de preciser la limite de pagination
      if (this.currentPage === this.nbrPage) return;
      this.currentPage++;
      this.getRestaurantsFromServer();
    },
    async previousPage() {
      this.currentPage--;
      this.getRestaurantsFromServer();
    },

    deleteRestaurant(r) {
      restaurantService.deleteRestaurant(r).then(() => {
        console.log("restaurant supprimé monsieur lotfi");
        this.getRestaurantsFromServer();
      });
    },
    // chercher un restaurant
    searchRestaurant: _.debounce(function () {
      this.getRestaurantsFromServer();
      this.nameSearch = "";
    }, 600),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
  width: 600px;
  margin: 0 auto;
  background-color: white;
}
.search {
  margin-top: 600 px;
  height: 300 px;
  width: 400 px;
  margin: 0 auto;
  background-color: white;
}
</style>
