<template>
  <div calss="mainContainer">
    <app-header />
    <search-box />
    <ranking-box />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import SearchBox from "../components/SearchBox.vue";
import RankingBox from "../components/RankingBox.vue";

export default {
  components: {
    AppHeader,
    SearchBox,
    RankingBox,
  },
};
</script>

<style>
</style>