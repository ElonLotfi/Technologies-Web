<template>
  <v-app class="table">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr >
            <p class="text">{{ nbrRestaurant }}</p>
            <th class="text-left"><v-icon class="icon">mdi-food</v-icon></th>
            <p class="text">{{ nbrPage }}</p>
            <th class="text-left">
              <v-icon>mdi-book-open-page-variant</v-icon>
            </th>
            <p class="text">{{ pageSize }}</p>
            <th class="text-left"><v-icon>mdi-move-resize</v-icon></th>
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
  line-height: 5em; /* hauteur de ligne (identique) */
  white-space: nowrap; /* interdiction de passer à la ligne */
  
}

</style>