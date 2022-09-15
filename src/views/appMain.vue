<template>
  <div class="mainContainer">
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

<style scoped>
.mainContainer {
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background: url("../images/background.png") no-repeat center center / 100%;
}
</style>