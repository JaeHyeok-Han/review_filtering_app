<template>
  <div class="searchContainer">
    <app-header />
    <search-box />
    <p>
      "{{ this.$store.getters.GET_SEARCH_KEYWORD }}" 검색결과 :
      {{ this.$store.getters.GET_SEARCH_RESULT.length }}건
    </p>
    <result-box />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import SearchBox from "../components/SearchBox.vue";
import ResultBox from "../components/ResultBox.vue";

export default {
  components: {
    AppHeader,
    SearchBox,
    ResultBox,
  },
};
</script>

<style scoped>
.searchContainer {
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background: url("../images/background.png") no-repeat center center / 100%;
  background-attachment: fixed;
}
.searchContainer p {
  padding: 20px 0;
  text-align: center;
}
</style>