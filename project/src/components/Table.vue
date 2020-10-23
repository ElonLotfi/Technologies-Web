<template>
<v-app>

  <div>
    <v-simple-table>
       <template v-slot:default>
      <tr>
        <th md-numeric>ID</th>
        <th>Nom</th>
        <th>Cuisine</th>
        <th>Action</th>
      </tr>

      <tr v-for="(r, index) in restaurants" :key="index">
        <td md-numeric>{{ index }}</td>
        <td>{{ r.name }}</td>
        <td>{{ r.cuisine }}</td>
        <td
          ><button
            v-on:click="deleteRestaurant(r)"
            class="favorite styled"
            type="button"
          >
            Supprimé
          </button>
          <router-link :to="'/Restaurant/' + r._id"
            >Detail</router-link
          ></td
        >
      </tr>
          </template>
    </v-simple-table>
   </div>
   </v-app>


</template>

<script>
export default {
  name: "TableSort",
  props: ["restaurants", "deleteRestaurant", "getRestaurantsFromServer"],
  data: () => ({
    users: [],
  }),
};
</script>