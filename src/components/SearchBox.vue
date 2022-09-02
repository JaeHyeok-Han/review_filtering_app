<template>
  <div class="searchContainer">
    <div class="searchBox">
      <input type="text" v-model="searchKeyword" class="searchInput" />
      <button type="button" v-on:click="search">
        <i class="fas fa-search search-btn"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchKeyword: "",
    };
  },
  methods: {
    search() {
      // 검색어전처리
      const value = this.searchKeyword.trim();
  
      // 기저사례
      if(value.length == 0) {
        alert("검색어를 입력하세요.");
        return;
      } else if(value.length < 2) {
        alert("검색어가 너무 짧습니다.");
        return;
      }
      const pre = this.$store.getters.GET_SEARCH_KEYWORD;
      if(value == pre) {
        alert("검색어가 동일합니다.");
        return;
      }

      // 비즈니스 로직
      this.$store.dispatch("FETCH_SEARCH_LIST", value);
      this.$router.push(`/search/${this.searchKeyword}`);
    },
  },
};
</script>

<style>
</style>