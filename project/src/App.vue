export * from './user.service';
<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" dark class="router"><br /><br />
      <router-link class="success" to="/">Home</router-link><br /><br />
      <router-link class="error" to="/Restaurant">Restaurant</router-link><br /><br />
      <router-link class="success" to="/Addrestaurant"
        >Ajouter restaurant</router-link
      ><br /><br />
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  props: ["nbrRestaurant", "nbrPage"],
  data() {
    return {
      drawer: true,
    };
  },
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  margin-top: 60px;

  margin-bottom: 100px;
}

.vcard {
  margin-top: 600 px;
  width: 700px;
  margin: 0 auto;
  background-color: white;
}
.router {
  text-align: center;
  color: white;
  margin: 0 auto;
}
</style>