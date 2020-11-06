<template>
  <v-app>
    <div class="wrapper">
      <div class="title">
        <h4>Notre menu</h4>
        <p class="prix">{{ this.menuPrice }} €</p>
      </div>
      <div class="menu1">
        <div class="single-menu">
          <img :src="this.menuPic" height="250" width="250" alt="" />

          <div class="menu-content">
            <h4>
              <div class="platName">
                <p class="menuNamme">Plat du jour</p>
                {{ this.menuName }}
              </div>
            </h4>
            <p class="description">
              {{ this.menuDiscription }}
            </p>
          </div>
        </div>

        <div class="single-menu">
          <img :src="this.dessertPic" height="250" width="250" alt="" />

          <div class="menu-content">
            <h4>
              <div class="dessertName">
                <p class="menuNamme">Dessert</p>
                {{ this.dessertName }}
              </div>
            </h4>
            <p class="description">{{ this.dessertDiscription }}</p>
          </div>
         
        </div>

       

        <div class="addToBasket">
           <v-btn  type="submit" v-on:click="addProductToBasket()" color="success">
            Ajouter au panier
          </v-btn>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import { basketService } from "../order/basketService";
import { menuGenerator } from "./menuGenerator";

export default {
  data() {
    return {
      menu: [],
      menuName: "",
      menuPic: "",
      menuDiscription: "",
      menuPrice: "",
      dessertName: "",
      dessertPic: "",
      dessertDiscription: "",
    };
  },

  mounted() {
    this.generateMenu();
    basketService.initProducts();
  },

  methods: {
    generateMenu() {
      this.menu = menuGenerator.generateMenu();
      this.menuName = this.menu[0];
      this.menuPic = this.menu[1];
      this.menuDiscription = this.menu[2];
      this.menuPrice = menuGenerator.generateMenuPrice();

      let dessert = menuGenerator.generateDessert();
      this.dessertName = dessert[0];
      this.dessertPic = dessert[1];
      this.dessertDiscription = dessert[2];
    },

    addProductToBasket() {
      try {
        basketService.addProductToBasket(this.menu);
        console.log("my basket" + this.menu);
        this.$toast.success({
          title: "Success",
          message: "Le menu est ajouté au panier",
          showDuration: 200,
          position: "bottom right",
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
body {
  font-family: "Poppins", sans-serif;
}
.wrapper {
  width: 1200px;
  margin: 100px auto;
}
.title {
  text-align: center;
  margin-bottom: 60px;
  margin-top: -70px;
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
.menu1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #20bcff;
  border-radius: 1%;
  margin-top: -50px;
}
.single-menu {
  flex-basis: 580px;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #ddd;

  margin-top: -35px;
}
.single-menu:nth-child(5),
.single-menu:nth-child(6) {
  border-bottom: 0;
}
.single-menu {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.single-menu:hover img {
  border-radius: 0;
}
.single-menu img {
  max-width: 220px;
  margin-right: 30px;
  border-radius: 50%;
  border: 1px solid #ddd;
  padding: 3px;
  transition: 0.5s;
}
.single-menu h4 {
  text-transform: capitalize;
  font-size: 22px;
  border-bottom: 1px dashed white;
  margin-bottom: 5px;
  padding-bottom: 5px;
  margin-bottom: 20px;
}
.single-menu h4 span {
  float: right;
  color: #ff7720;
  font-style: italic;
}
.prix {
  display: block;
  font-size: 18px;
  font-style: italic;
  margin-bottom: -10px;
}
.menuNamme {
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 35px;
  color: white;
  margin-top: 10px;
  text-align: center;
}
.menuDessert {
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 22px;
  color: white;
  margin-top: 50px;
  text-align: center;
}
.platName {
  font-weight: lighter;
  text-transform: uppercase;
  color: #f6c133;
  margin-top: 70px;
  text-align: center;
  margin-bottom: 20px;
}

.dessertName {
  font-weight: lighter;
  text-transform: uppercase;
  color: #f6c133;
  margin-top: 70px;
  text-align: center;
  margin-bottom: 20px;
}
.description {
  height: 200px;
  color: white;
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 16px;
}
.addToBasket{
  margin-left: 505px;
  margin-top: -20px;
  margin-bottom :20px;
}
</style>  
