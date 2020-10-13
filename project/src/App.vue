<template>
  <div id="app">
    <restaurantList />
  </div>
</template>

<script>
import restaurantList from "./components/restaurantList.vue";

export default {
  name: "App",
  components: {
    restaurantList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
