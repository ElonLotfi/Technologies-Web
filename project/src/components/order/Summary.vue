<template>
  <v-app>
    <div class="bg7">
        <div class="notfound"><h3>Merci pour votre commande</h3></div>
        <h3 class="orderNumber">
            numéro de commande {{this.rundomOrderNumber}}
        </h3>
      
      </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
        rundomOrderNumber : Math.floor(Math.random() * 5727393832) + 1727393832
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.parallax {
  margin-top: 50px;
}
.bg7 {
  /* The image used */
  background: url("")
    no-repeat center center fixed;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 640px;
}
.notfound {
  text-align: center;
  margin-left: 70px;
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 25px;
  margin-top: 170px;
}
.orderNumber{
      text-align: center;
  margin-left: 70px;
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 19px;
  margin-top: 50px;
}
</style>  
