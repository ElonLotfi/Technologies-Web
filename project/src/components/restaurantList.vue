<template>
  <h1>Ici la listre des restaurant :{{ msg }}</h1>
</template>

<script>
export default {
  name: "ListDesRestaurants",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
