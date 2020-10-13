<template>
  <section>
    <b-button type="is-success"  @click="clickMe">Success</b-button>
  </section>
</template>

<script>
export default {
  methods: {
    clickMe() {
      this.$buefy.notification.open("Clicked!!");
    },
  },
};
</script>
