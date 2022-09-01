<template>
  <div>
    <app-header />
    <search-box />
    <p class="search-result-notice">
      "{{ this.searchValue }}" 검색결과 :
      {{ searchItem.length }}건
    </p>
    <div class="searchItem-Box">
      <search-item
        v-for="(item, index) in searchItem"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import SearchBox from "../components/SearchBox.vue";
import SearchItem from "../components/SearchItem.vue";

export default {
  components: {
    AppHeader,
    SearchBox,
    SearchItem,
  },
  data() {
    return {
      searchValue: this.$route.params.searchValue,
    };
  },
  created() {
    if(this.$store.getters.GET_SEARCH_LIST.length === 0)
      this.$store.dispatch("FETCH_SEARCH_LIST", this.searchValue);
  },
  computed: {
    searchItem() {
      return this.$store.getters.GET_SEARCH_LIST;
    },
  },
};
</script>

<style>
</style>