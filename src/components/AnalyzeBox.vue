<template>
  <div class="analyzeContainer">
    {{ emotion }}
  </div>
</template>

<script>
export default {
  computed: {
    emotion() {
      return this.$store.getters.GET_EMOTION;
    },
  },
};
</script>

<style>
</style>