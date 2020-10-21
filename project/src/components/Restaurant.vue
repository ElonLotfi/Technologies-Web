<template>
  <div>
    <form @submit.prevent="modifyRestaurant($event)">
      <md-field>
        <label>Nom</label>
        <md-input v-model="this.restaurant.name"></md-input>
      </md-field>

      <md-field>
        <label>Cuisine</label>
        <md-input v-model="this.restaurant.cuisine"></md-input>
      </md-field>
      <md-field>
        <label>building</label>
        <md-input v-model="this.restaurant.address.building"></md-input>
      </md-field>
      <md-field>
        <label>street</label>
        <md-input v-model="this.restaurant.address.street"></md-input>
      </md-field>
      <md-field>
        <label>zipcode</label>
        <md-input v-model="this.restaurant.address.zipcode"></md-input>
      </md-field>
      <md-field>
        <label>Borough</label>
        <md-input v-model="this.restaurant.borough"></md-input>
      </md-field>
      <button>Modifier</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Restaurant",
  mounted() {
    this.getRestaurant();
  },
  data: function () {
    return {
      restaurant:
        {
          name :"test" ,
          

        }
      ,
    };
  },

  computed: {
    id() {
      return this.$route.params.id;
    },
  },

  methods: {
    // REQUETES PUT
    modifyRestaurant(event) {
      // Pour éviter que la page ne se ré-affiche
      //event.preventDefault();

      // Récupération du formulaire. Pas besoin de document.querySelector
      // ou document.getElementById puisque c'est le formulaire qui a généré
      // l'événement
      let form = event.target;
      // Récupération des valeurs des champs du formulaire
      // en prévision d'un envoi multipart en ajax/fetch
      let donneesFormulaire = new FormData(form);

      // d'un champs d'un formulaire
      // comme cela, si on connait le nom
      // du champ (valeur de son attribut name)

      let url = "http://127.0.0.1:8080/api/restaurants/" + this.id;

      fetch(url, {
        method: "PUT",
        body: donneesFormulaire,
      })
        .then((responseJSON) => {
          responseJSON.json().then((res) => {
            console.log(res.restaurant);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getRestaurant() {
      let url = "http://127.0.0.1:8080/api/restaurants/" + this.id;
      fetch(url).then((responseJSON) => {
        responseJSON.json().then((res) => {
          console.log(res.restaurant);
          this.restaurant = res.restaurant;
        });
      });
    },
  },
};
</script>