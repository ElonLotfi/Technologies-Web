<template>
  <section>
    <b-field label="Username" type="text" message="This username is available">
      <b-input size="is-small" value="" maxlength="35"></b-input>
    </b-field>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "John Silver",
    };
  },
};
</script>
