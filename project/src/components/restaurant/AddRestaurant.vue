<template>
  <v-app>
    <div class="bg">
      <v-row align="center" justify="center">
        <v-col class="vcol text-center" cols="12">
          <v-btn class="bttn1" v-scroll-to="'#element'"
            >Ajouter un restaurant</v-btn
          >
        </v-col>
      </v-row>
    </div>
    <div class="backgroundFormulaire">
      <div class="formulaire " id="element">
        <div class="form ">
          <form class="fomr1" @submit.prevent="handleSubmit($event)">
            <v-text-field
              class="test special"
              v-model="restaurant.nom"
              :counter="50"
              label="Nom de restaurant"
              required
              tag="input"
              name="nom"
            ></v-text-field>

            <v-text-field
              class="test"
              v-model="restaurant.cuisine"
              :counter="50"
              label="Cuisine"
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
              label="Bâtiment"
              required
              tag="input"
              name="building"
              v-model="restaurant.address.building"
            ></v-text-field>
            <v-text-field
              class="test"
              v-model="restaurant.address.street"
              :counter="50"
              label="Rue"
              required
              tag="input"
              name="street"
            ></v-text-field>

            <v-text-field
              class="test"
              v-model="restaurant.address.zipcode"
              :counter="50"
              label="Code postal"
              required
              tag="input"
              name="zipcode"
            ></v-text-field>
            <div class="formButton">
              <v-btn type="submit" color="btn"> Valider </v-btn>
            </div>
          </form>
        </div>
      </div>
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
            console.log(res);
            this.$toast.success({
              title: "bien joué",
              message: "Le restaurant est bien ajouté",
              showDuration: 200,
              position: "bottom right",
            });
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
  background-color: #161616;
}
.btn {
  margin: 0 auto;
  margin-left: 560px;
  margin-bottom: 100px;
  width: 100px;
  height: 50px;
  margin-top: 15px;

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

.form {
  height: 200px;
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
  margin-top: 50px;

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
  width: 460px;
  margin-left: 480px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 560px;
}
.formButton {
  margin-left: -380px;
  margin-top: -60px;
}
.backgroundFormulaire {
  background: #ababa1 no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 770px;
  padding-top: 40px;
}
input
{
height: 30px;
width: 100px;
}
.special{
  overflow: hidden;
}

</style>
