<template>
  <div>
    <app-header />
    <search-box />
    <div class="ranking-box">
      <ranking-item
        v-for="(item, index) in rankingItem"
        :key="index"
        :item="item"
        :rank="index"
      />
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import SearchBox from "../components/SearchBox.vue";
import RankingItem from "../components/RankingItem.vue";

export default {
  components: {
    AppHeader,
    SearchBox,
    RankingItem,
  },
  computed: {
    rankingItem() {
      return this.$store.getters.GET_RANKING;
    },
  },
  created() {
    this.$store.dispatch("FETCH_RANKING");
  },
};
</script>

<style scoped>
.ranking-box {
  width: 100%;
  padding: 30px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>