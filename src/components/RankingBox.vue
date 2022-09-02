<template>
  <div class="rankingContainer">
      <ranking-item
        v-for="(item, index) in ranking"
        :key="index"
        :item="item"
        :rank="index"
      />
    </div>
</template>

<script>
import RankingItem from "./RankingItem.vue";

export default {
  components: {
    RankingItem,
  },
  computed: {
    ranking() {
      return this.$store.getters.GET_RANKING;
    },
  }
};
</script>

<style>
</style>