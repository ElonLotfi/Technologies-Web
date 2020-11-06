<template>
  <v-app>
    <div class="bg3">
      <h2 class="panier">Votre panier</h2>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr v-for="(r, index) in products" :key="index">
              <td>sss<img src="" alt="" />/td></td>
              <td>{{  }}</td>
              <td>{{ r[2] }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </v-app>
</template>

<script>
import { basketService } from "./basketService";

export default {
  data() {
    return {
      products: [],
      value: { name: "", img: "", description: "" },
    };
  },
  mounted() {
    basketService.initProducts();
    this.getProduct();
  },
  methods: {
    getProduct() {
      this.value = basketService.getProducts()[0]
      console.log(this.value['0'])

      this.products = basketService.getProducts();
    },
  },
};
</script>

<style lang="scss">
.parallax {
  margin-top: 50px;
}
.bg3 {
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
</style>  
