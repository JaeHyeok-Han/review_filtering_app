<template>
  <div>
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

<style>
</style>