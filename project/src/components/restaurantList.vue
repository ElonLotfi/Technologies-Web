<template>
  <div>
    <form @submit.prevent="ajouterRestaurant($event)">
      <input name="nom" type="text" required v-model="nom" />
      <input name="cuisine" type="text" required v-model="cuisine" />

      <button>Ajouter</button>
    </form>

    <h1>Nombre de restaurants : {{ this.nbrRestaurant }}</h1>
    <h1>Nombre total de pages : {{ this.nbrPage }}</h1>

    <p>
      nombre de restaurant par page :
      <input
        type="range"
        min="5"
        max="100"
        value="5"
        v-model="pageSize"
        @input="getRestaurantsFromServer()"
      />{{ pageSize }}
    </p>

    <div align="center">
      <label>
        chercher un restaurant :
        <input
          @input="searchRestaurant()"
          type="text"
          required
          v-model="nameSearch"
        />
      </label>
    </div>

    <Table
      v-bind:restaurants="this.restaurants"
      v-bind:deleteRestaurant="deleteRestaurant"
    ></Table>
  </div>
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
              //console.log(res.data);
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
    //// Ajouter un restaurant dans la base de donnée
    ajouterRestaurant(event) {
     restaurantService.addRestaurant(event).then(() => {
        console.log("restaurant ajouté monsieur lotfi");
        this.getRestaurantsFromServer();
      });
      this.nom = "";
      this.cuisine = "";
    },
    getColor(index) {
      return index % 2 ? "lightBlue" : "pink";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
