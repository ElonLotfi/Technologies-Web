<template>
  <v-app>
    <div class="bg">
      <div class="diva">
        <div class="filtre"><h3>projet Web</h3></div>
        <div class="filtre1"><h4 class="position">Supervisé par MONSIEUR MICHEL BUFFA</h4></div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.parallax {
  margin-top: 50px;
}
.bg {
  /* The image used */
  background: url("https://images.pexels.com/photos/5637625/pexels-photo-5637625.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")
    no-repeat center center fixed;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 640px;
}
.vcol {
  color: #cb4b58;
  margin-top: 200px;
  size: 300px;
}
.filtre {
  text-align: center;
  text-transform: uppercase;
  font-size: 36px;
  position: relative;
  text-shadow: -1px -1px #9df, 1px 1px #49d, -3px 0 4px #000;
  font-family: "Segoe print", Arial, Helvetica, sans-serif;
  color: #6bf;
  font-weight: lighter;
  -moz-box-shadow: 2px 2px 6px #888;
  -webkit-box-shadow: 2px 2px 6px #888;
  box-shadow: 2px 2px 6px #888;
  text-align: center;
  display: inline;
  line-height: 150px;
}
.filtre1 {
  text-align: center;
  color: #050a08;
  text-transform: uppercase;
  font-size: 36px;
  position: relative;
  text-shadow: -1px -1px #9df, 1px 1px #49d, -3px 0 4px #000;
  font-family: "Segoe print", Arial, Helvetica, sans-serif;
  color: #6bf;
  font-weight: lighter;
  -moz-box-shadow: 2px 2px 6px #888;
  -webkit-box-shadow: 2px 2px 6px #888;
  box-shadow: 2px 2px 6px #888;
  text-align: center;
  display: inline;
  line-height: 150px;
}

.diva {
  margin-top: 180px;
}
.position{
  margin-top: -90px;

}
</style>  
