<template>
  <div v-on:click="selectMovie" class="resultItem">
    {{ item }}
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  methods: {
    selectMovie() {
      this.$store.commit("SET_CURRENT_MOVIE", this.movie);
      this.$router.push({ name: "detail", params: { item: this.movie } });
    },
  },
};
</script>

<style>
</style>