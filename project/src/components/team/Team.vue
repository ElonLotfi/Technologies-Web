<template>
  <v-app>
    <div class="bg3">
      <h3 class="titre">Technologies Web</h3>
      <h4 class="lotfi">master 1 miage</h4>
      <img src="https://picsum.photos/200/300" alt="" class="image2" />
      <h5 class="desc">
        CE PROJET A ÉTÉ RÉALISÉ M'HAMED LOTFI ENCADRE PAR M MICHEL BUFFA DANS LA
        DISCIPLINE Technologies Web POUR L'ANNÉE UNIVERSITAIRE 2020-2021.
      </h5>
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
.lotfi {
  color: #f6c133;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 32px;
}
.image2 {
  display: block;
  width: 200px;
  height: 200px;
  margin: 25px auto;
  background-color: #0159b3;
  border-radius: 50%;
}
.desc {
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 25px;
  text-align: center;
  width: 850px;
  margin-top: 40px;
  margin-left: 250px;
}
</style>  
