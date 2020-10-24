export * from './user.service';

<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" primary permanent width="8%">
      <v-row class="fill-height deep-purple accent-4" no-gutters>
      

        <v-list class="grow"
          ><br />
          <router-link class="btn" tag="button" to="/"> Home</router-link
          ><br /><br />
          <router-link class="btn" tag="button" to="/Addrestaurant">
            Ajouter</router-link
          ><br /><br />
        </v-list>
      </v-row>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "/", icon: "mdi-view-dashboard" },
        { title: "/Restaurant", icon: "mdi-forum" },
      ],
      links: ["Home", "Restaurant", "Settings"],
      mini: true,
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
.btn {
  display: block;
  margin: 0 auto;
  color: black;
  background-color: white;
  text-align: center;
  width: 100px;
  height: 50px;
  border-radius: 10px;
}
</style>