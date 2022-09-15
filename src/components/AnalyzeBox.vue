<template>
  <div class="analyzeContainer">
    <analyze-item v-for="(item, index) in emotion" :key="index" :item="item" />
  </div>
</template>

<script>
import AnalyzeItem from "./AnalyzeItem.vue";

export default {
  components: {
    AnalyzeItem,
  },
  computed: {
    emotion() {
      return this.$store.getters.GET_EMOTION;
    },
  },
};
</script>

<style scoped>
.analyzeContainer {
  width: 100%;
  padding: 20px 0;
}
</style>