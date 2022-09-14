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
      this.$store.commit("SET_MOVIE", this.item);
      this.$store.dispatch("FETCH_FILTERING_DATA");
      this.$router.push(`/detail/${this.item.title}`);
    },
  },
};
</script>

<style>
</style>