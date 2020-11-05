<template>
  <v-app>
    <div class="bg3">
      <h3 class="titre">Technologies Web</h3>
      <h4 class="lotfi">master 1 miage</h4>
      <img  src="https://scontent-mrs2-2.xx.fbcdn.net/v/t1.0-9/123737687_738908080374142_4263792358324238267_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=OqZgUiStVXEAX97FqDc&_nc_ht=scontent-mrs2-2.xx&oh=f057f946a1d33ef3d1d7ad1121c0c316&oe=5FC94177" alt="" class="image2" />
      <h5 class="desc">
        CE PROJET A ÉTÉ RÉALISÉ par M'HAMED LOTFI et ENCADRE PAR M MICHEL BUFFA DANS LA
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
  height: 200px;
  width: 200px;
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
