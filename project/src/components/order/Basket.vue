<template>
  <v-app>
    <div class="bg6">
      <h2 class="panier">Votre panier</h2>
      <v-divider class="mx-4"></v-divider>
      <div v-if="this.products[1] != null">
        <img :src="this.imageOfProduct" alt="" class="image3" />
        <div class="prodName">
          <h4>{{ this.productName }}</h4>
        </div>
        <div class="livraison">
          <h4>Généralement livré dans un délai maximum de 2 heures.</h4>
        </div>
        <div class="prixProduit">22 €</div>

        <v-btn
          class="button1"
          type="submit"
          v-on:click="emptyBasket()"
          color="warning"
        >
          Supprimer
        </v-btn>
          <div  class="passerCmnd">
          <router-link
            
            color="success"
            to="/Summary"

            >Passer la commande</router-link
          ></div>
      </div>
      <div v-else>
        <h1 class="notfound">votre panier est vide</h1>
      </div>
    </div>
  </v-app>
</template>

<script>
import { basketService } from "./basketService";

export default {
  data() {
    return {
      products: {},
      imageOfProduct: "",
      productName: "",
    };
  },
  mounted() {
    basketService.initProducts();
    this.getProduct();
    //sessionStorage.clear();
  },
  methods: {
    getProduct() {
      this.products = basketService.getProducts().split(",");
      console.log(this.products[1]);
      this.imageOfProduct = this.products[2];
      this.productName = this.products[1];
    },

    emptyBasket() {
      sessionStorage.clear();
      window.history.go(0);
    },
  },
};
</script>

<style lang="scss">
.parallax {
  margin-top: 50px;
}
.bg6 {
  /* The image used */

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 640px;
}
.titre {
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 22px;
  color: black;
  margin-top: 50px;
  text-align: center;
}
.image3 {
  margin-top: 40px;
  width: 250px;
  height: 200px;
  margin-left: 50px;
}
.prodName {
  margin-top: -210px;
  color: #f6c133;
  margin-left: 360px;
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 30px;
}
.panier {
  margin-left: 70px;
  margin-top: 70px;
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 16px;
}
.livraison {
  margin-left: 360px;
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 10px;
}
.button1 {
  margin-top: 113px;
  margin-left: 360px;
   width: 160px;
  height: 30px;
}
.passerCmnd {
  margin-left: 550px;
  margin-top: -35px;
  background: chartreuse;
  width: 160px;
  height: 36px;
  border-radius: 7%;
}
.notfound {
  text-align: center;
  margin-left: 70px;
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 25px;
  margin-top: 170px;
}
.prixProduit {
  margin-left: 360px;
  margin-top: 10px;
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 25px;
  margin-bottom: -50px;
}
</style>  
