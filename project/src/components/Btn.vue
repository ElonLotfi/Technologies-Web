<template>
  <div>
    <div>
      <md-button class="md-primary">Primary</md-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
small {
  display: block;
}
</style>

<script>
export default {
  name: "ButtonVsLink",
  computed: {
    pageUrl() {
      return window.location.href;
    },
  },
};
</script>
