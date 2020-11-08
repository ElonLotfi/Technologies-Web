<template>
  <v-app>
    <div class="bg6">
      
      <h2 class="panier">Votre panier</h2>
      <v-divider class="mx-4"></v-divider>
      <div v-if="this.products[1] != null">
        <div class="hohoh">
        <img :src="this.imageOfProduct" alt="" class="image3" />
        <div class="prodName">
          <h4>{{ this.productName }}</h4>
        </div>

        <img class="dessertImage" :src="this.dessertPict" alt="" />
        <div class="dessertNames">
          <h4>{{ this.dessertName }}</h4>
        </div>
        </div>

        <div class="forma">
          <div class="livraison">
            <h4>Généralement livré dans un délai maximum de 2 heures.</h4>
          </div>
          <div class="envoyer">
          <v-btn
            class="button1"
            type="submit"
            v-on:click="emptyBasket()"
            color="warning"
          >
            Supprimer
          </v-btn>

          <div class="passerCmnd">
            <router-link to="/Summary" tag="button"  @click.native="emptyBasket()"
              ><div class="inBut">Passer la commande</div></router-link
            ></div>
          </div>
                    <h4 class="pricess">{{ this.price }} €</h4>

        </div>
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
      desserts: {},
      dessertPict: "",
      dessertName: "",
      price: basketService.getPrice(),
    };
  },
  mounted() {
    basketService.initProducts("prod");
    this.getPlatInformation();
    this.getDessertInformation();
    console.log("price" + basketService.getPrice());
  },
  methods: {
    getPlatInformation() {
      this.products = basketService.getProducts("prod").split(",");
      this.imageOfProduct = this.products[2];
      this.productName = this.products[1];
    },

    getDessertInformation() {
      this.desserts = basketService.getProducts("dessert").split(",");
      console.log("dessert" + this.desserts[1]);
      this.dessertPict = this.desserts[2];
      this.dessertName = this.desserts[1];
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
   border-radius: 50%;
}
.prodName {
  margin-top: -210px;
  color: #f6c133;
  margin-left: 360px;
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 22px;
}
.panier {
  margin-left: 70px;
  margin-top: 70px;
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 16px;
}
.livraison {
  margin-left: -110px;
  text-align: center;
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 10px;
  margin-top: 300px;
  margin-bottom: -50px;
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
  background: black;
  width: 190px;
  height: 36px;
  border-radius: 7%;
  color: white;
  text-align: center;
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
.dessertImage {
  margin-top: -20px;
  width: 250px;
  height: 200px;
  margin-left: 730px;
   border-radius: 50%;
}
.dessertNames {
  margin-top: -227px;
  color: #f6c133;
  margin-left: 1030px;
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 22px;
}
.qPlat {
  margin-left: 360px;
  margin-top: 12px;
}
.forma {
  margin-left: 150px;
  margin-top: -80px;
}
.pricess{
   font-weight: lighter;
  text-transform: uppercase;
  font-size: 22px;
  margin-top: -90px;
  margin-left: 525px;
}
.envoyer{
  margin-left :10px
}
.hohoh{
  margin-left: 130px;
}
.inBut{
  margin-top:6px ;
    text-transform: uppercase;

}

</style>  
