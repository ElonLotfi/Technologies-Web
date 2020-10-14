<template>
  <div>
    <md-table>
      <md-table-row>
        <md-table-head>Nom</md-table-head>
        <md-table-head>Cuisine</md-table-head>
      </md-table-row>
      <tbody>
        <md-table-row v-for="(r, index) in restaurants" :key="index">
          <md-table-cell>{{ r.name }}</md-table-cell>
          <md-table-cell>{{ r.cuisine }}</md-table-cell>
          <md-table-cell>
            <button
              v-on:click="deleteRestaurant(r)"
              class="favorite styled"
              type="button"
            >
              supprimé
            </button>
          </md-table-cell>
        </md-table-row>
      </tbody>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "TableSort",
  props: ["restaurants", "deleteRestaurant"],
  data: () => ({
    users: [
      {
        id: 1,
        name: "Shawna Dubbin",
        email: "sdubbin0@geocities.com",
        gender: "Male",
        title: "Assistant Media Planner",
      },
      {
        id: 2,
        name: "Odette Demageard",
        email: "odemageard1@spotify.com",
        gender: "Female",
        title: "Account Coordinator",
      },
      {
        id: 3,
        name: "Lonnie Izkovitz",
        email: "lizkovitz3@youtu.be",
        gender: "Female",
        title: "Operator",
      },
      {
        id: 4,
        name: "Thatcher Stave",
        email: "tstave4@reference.com",
        gender: "Male",
        title: "Software Test Engineer III",
      },
      {
        id: 5,
        name: "Clarinda Marieton",
        email: "cmarietonh@theatlantic.com",
        gender: "Female",
        title: "Paralegal",
      },
    ],
  }),
};
</script>
