<template>
  <div class="search-container">
    <div class="search-box">
      <input type="text" v-model="searchValue" class="search-input" />
      <i v-on:click="search" class="fas fa-search search-btn"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    search() {
      if (this.searchValue.length > 1) {
        if (this.searchValue !== this.$route.params.searchValue) {
          this.$store.dispatch("FETCH_SEARCH_LIST", this.searchValue);
          this.$router.push(`/search/${this.searchValue}`);
        } else {
          console.log("검색어가 동일합니다.");
        }
      } else {
        console.log("검색어가 너무 짧습니다.");
      }
    },
  },
};
</script>

<style>
</style>