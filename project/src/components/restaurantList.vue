<template>
  <v-app>
    <div class="vapp">
      <v-container class="information">
        <v-row>
          <v-col>
            <Information
              v-bind:nbrRestaurant="this.nbrRestaurant"
              v-bind:nbrPage="this.nbrPage"
              v-bind:pageSize="this.pageSize"
            />
          </v-col>

          <v-spacer></v-spacer> <v-spacer></v-spacer>

          <v-col>
            <v-card class="search" outlined tile>
              <v-text-field
                class="search"
                type= "text"
                v-model="nameSearch"
                flat
                tag="v-text-field"
                hide-details
                label="Chercher un restaurant"
                @input="getRestaurantsFromServer()"
                prepend-inner-icon="mdi-magnify"
                solo-inverted
              ></v-text-field>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <br /><br />
      <div v-if="this.nbrRestaurant > 0 && nbrPage > 1">
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
        </div>
      </div>
      <div v-else><br /><br /></div>

      <div v-if="this.loader == true">
        <Loader></Loader>
      </div>
      <div v-else>
        <div class="div1">
          <Table
            v-bind:restaurants="this.restaurants"
            v-bind:deleteRestaurant="deleteRestaurant"
            v-bind:nbrRestaurant="this.nbrRestaurant"
          >
          </Table>

          <div v-if="this.nbrPage > 1">
            <div class="pagination">
            <Pagination
              v-bind:nextPage="this.nextPage"
              v-bind:previousPage="this.previousPage"
            ></Pagination></div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import Information from "./Information";
import Loader from "./Loader";
import Pagination from "./Pagination";

import Table from "./Table";
import _ from "lodash";
import { restaurantService } from "../services/restaurantService";
export default {
  name: "restaurantList",
  components: {
    Table,
    Information,
    Loader,
    Pagination,
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
      loader: true,
    };
  },

  mounted() {
    this.getRestaurantsFromServer();
    console.log("heheheh")
  },
  methods: {
     getRestaurantsFromServer() {
      try {
         restaurantService
          .fetchRestaurants(this.currentPage, this.pageSize, this.nameSearch)
          .then((responseJSON) => {
            responseJSON.json().then((res) => {
              this.loader = false;

              console.log("the service work also ! " + res.msg);
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
      this.loader = true;

      this.getRestaurantsFromServer();
    },
    async previousPage() {
      this.currentPage--;
      this.loader = true;

      this.getRestaurantsFromServer();
    },

    deleteRestaurant(r) {
      restaurantService.deleteRestaurant(r).then(() => {
        console.log("restaurant supprimé monsieur lotfi");
        this.loader = true;

        this.getRestaurantsFromServer();
        this.$vToastify.success("restaurant supprimé");

      });
    },
    // chercher un restaurant
    searchRestaurant: _.debounce(function () {
      this.loader = true;
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
.information {
  background-color: white;
}
.btn {
  color: red;
  display: inline-block;
  margin: 0 1%;
  width: 100px;
  height: 50px;
  padding: 10px 10px;
  padding-bottom: -1000px;
}
.div1 {
  margin-left: 200px;
  margin-right: 1000px;
  width: 1300px;
}
.div2 {
  margin-left: 650px;
  width: 800px;
}
.diver {
  margin: 5 auto;
}
.pagination{
  margin-left: 220px;
  margin-top:10px;
  margin-bottom: 0px;
}
</style>
