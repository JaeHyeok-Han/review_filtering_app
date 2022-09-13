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
  created() {
    this.$store.dispatch("FETCH_FILTERING_DATA");
  },
};
</script>

<style>
</style>