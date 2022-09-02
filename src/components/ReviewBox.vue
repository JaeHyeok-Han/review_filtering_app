<template>
  <div class="reviewContainer">
    {{ review }}
  </div>
</template>

<script>
export default {
  computed: {
    review() {
      return this.$store.getters.GET_REVIEW;
    },
  },
};
</script>

<style>
</style>