<template>
  <table>
    <tr>
      <th>Nom</th>
      <th>Cuisine</th>
    </tr>
    <tbody>
      <tr
        v-for="(r, index) in restaurants"
        :key="index"
        v-bind:style="{ backgroundColor: getColor(index) }"
        v-bind:class="{ bordureRouge: index === 2 }"
      >
        <td>{{ r.name }}</td>
        <td>{{ r.cuisine }}</td>
        <td>
          <button
            v-on:click="deleteRestaurant(r)"
            class="favorite styled"
            type="button"
          >
            supprimé
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import _ from "lodash";
export default {
  name: "ListDesRestaurants",
  props: {
    msg: String,
  },
  data: function() {
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
      let url =
        "http://127.0.0.1:1234/api/restaurants/?page=" + this.currentPage;
      url += "&pagesize=" + this.pageSize;
      url += "&name=" + this.nameSearch;

      let reponseJSON = await fetch(url);
      let res = await reponseJSON.json();

      this.restaurants = res.data;
      this.nbrRestaurant = res.count;
      this.nbrPage = Math.round(this.nbrRestaurant / this.pageSize);
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
      let url = "http://127.0.0.1:1234/api/restaurants/";
      url += r._id;

      fetch(url, {
        method: "DELETE",
      })
        .then((responseJSON) => {
          responseJSON.json().then((res) => {
            console.log("restaurant supprimé avec succes ! ");
            console.log(res.msg);
            this.getRestaurantsFromServer(); // mise a jour de la vue
          });
        })
        .catch((err) => {
          console.log(err.msg);
        });
    },
    // chercher un restaurant
    searchRestaurant: _.debounce(function() {
      this.getRestaurantsFromServer();
    }, 600),
    //// Ajouter un restaurant dans la base de donnée
    ajouterRestaurant(event) {
      // Récupération du formulaire. Pas besoin de document.querySelector
      // ou document.getElementById puisque c'est le formulaire qui a généré
      // l'événement
      let form = event.target;
      // Récupération des valeurs des champs du formulaire
      // en prévision d'un envoi multipart en ajax/fetch
      let donneesFormulaire = new FormData(form);

      //let id = form._id.value; // on peut aller chercher la valeur
      // d'un champs d'un formulaire
      // comme cela, si on connait le nom
      // du champ (valeur de son attribut name)

      let url = "http://127.0.0.1:1234/api/restaurants/";

      fetch(url, {
        method: "POST",
        body: donneesFormulaire,
      })
        .then((responseJSON) => {
          responseJSON.json().then((res) => {
            console.log("done !");
            console.log(res.msg);
            this.getRestaurantsFromServer(); // mise a jour de la vue
          });
        })
        .catch((err) => {
          console.log(err.msg);
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
