<template>
  <div class="resultContainer">
    <result-item
      v-for="(item, index) in result"
      :key="index"
      :item="item"
      :rank="index"
    />
  </div>
</template>

<script>
import ResultItem from "./ResultItem.vue";

export default {
  components: {
    ResultItem,
  },
  computed: {
    result() {
      return this.$store.getters.GET_SEARCH_RESULT;
    },
  },
};
</script>

<style scoped>
.resultContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}
</style>