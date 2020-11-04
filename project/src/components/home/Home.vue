<template>
  <v-app>
<div class="bg" >

    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="vcol text-center"
        cols="12"
      >
        <h1 class="display-1 font-weight-thin mb-4">
          Gestion des restaurants
        </h1>
        <h4 class="subheading">
          Technologies Web !
        </h4>
      </v-col>
    </v-row>


</div>

  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.parallax{

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
  height: 650px;
}
.vcol{
    color: #CB4B58;
    margin-top: 200px;
    size: 300px;
}
</style>