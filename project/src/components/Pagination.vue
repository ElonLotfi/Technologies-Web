<template>
  <v-app>
    <div >
      <v-btn class="btn success" v-on:click="previousPage()">Precedent</v-btn>
      <v-btn class="btn2 success" v-on:click="nextPage()" type="v-btn"
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

  },
  data() {
    return {};
  },
};
</script>

<style scoped>


.btn {
  display: inline-block;
  width: 100px;
  height: 50px;
  margin-top: 30px;
  margin-left: 450px;
}
.btn2 {
  display: inline-block;
  width: 100px;
  height: 50px;
  margin-top: 30px;
  margin-left: 100px;

}
</style>