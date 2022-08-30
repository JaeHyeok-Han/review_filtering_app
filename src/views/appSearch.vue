<template>
  <div>
    <app-header />
    <search-box />
    <p class="search-result-notice">
      "{{ this.$route.params.searchValue }}" 검색결과 :
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
  computed: {
    searchItem() {
      return this.$store.getters.GET_SEARCH_LIST;
    },
  },
};
</script>

<style scoped>
.search-result-notice {
  text-align: center;
  padding: 0 0 10px;
}
.searchItem-Box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
</style>