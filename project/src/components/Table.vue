<template>
  <v-app>
    <v-simple-table >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Cuisine</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(r, index) in restaurants" :key="index">
            <td>{{ r.name }}</td>
            <td>{{ r.cuisine }}</td>
            <td>
              <v-btn
                class="router error"
                v-on:click="deleteRestaurant(r)"
                type="v-btn"
              >
                Supprimé
              </v-btn>
              <router-link
                class="router success"
                tag="v-btn"
                :to="'/Restaurant/' + r._id"
                >Detail</router-link
              >
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-app>
</template>

<script>
export default {
  props: ["restaurants", "deleteRestaurant", "getRestaurantsFromServer"],
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

.group {
  display: flex;
  flex: 1;
  justify-content: space-around;
}
</style>