<template>
  <v-app>
    <div >
      <v-btn  :disabled = "currentPage === 0" class="btn success" v-on:click="previousPage()">Precedent</v-btn>
      <v-btn :disabled = "currentPage === nbrPage" class="btn2 success" v-on:click="nextPage()" type="v-btn"
        >Suivant</v-btn
      >
    </div>
  </v-app>
</template>

<script>
export default {
  props: {
      nextPage :Function,
      previousPage : Function,
      currentPage :Number,
      nbrPage : Number

  },
  data() {
    return {};
  },
};
</script>

<style scoped>


.btn {
margin-right: 30px;
width: 160px;
  position: relative;
  padding: 12px 36px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 40px;
  background: linear-gradient(90deg,#755b,#55e7fc);

}
.btn2 {
  width: 160px;

  position: relative;
  padding: 12px 36px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 40px;
  background: linear-gradient(90deg,#755b,#55e7fc);


}
</style>