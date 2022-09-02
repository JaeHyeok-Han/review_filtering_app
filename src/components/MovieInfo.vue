<template>
  <div class="movieContainer">
    {{ movie }}
  </div>
</template>

<script>
export default {
  computed: {
    movie() {
      return this.$store.getters.GET_MOVIE;
    },
  },
};
</script>

<style>
</style>