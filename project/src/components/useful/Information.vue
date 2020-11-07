<template>
  <v-app class="table">
    <v-simple-table>
      <template >
        <thead>
          <tr >
            <p class="text">{{ nbrRestaurant }}</p>
            <th ><v-img tag=""  src="https://img.icons8.com/color/48/000000/fry.png"/></th>
            <p class="text">{{ nbrPage }}</p>
            <th >
              <v-img tag="img" src="https://img.icons8.com/color/48/000000/literature.png"/>
            </th>
            <p class="text">{{ pageSize }}</p>
            <th><v-img tag="img" src="https://img.icons8.com/color/48/000000/page-size.png"/></th>
          </tr>
        </thead>
      </template>
    </v-simple-table>
  </v-app>
</template>

<script>
export default {
  props: ["nbrRestaurant", "nbrPage", "pageSize"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.router {
  color: white;
  display: inline-block;
  margin: 0 1%;
  width: 100px;
  height: 50px;
}

.table {
  background-color: white;
  height: 100px;
}
.text {
  /* hauteur du parent */
  white-space: nowrap; /* interdiction de passer à la ligne */
  margin-top: 10px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
     font-weight: lighter;

  font-size: 22px;
  
}

</style>