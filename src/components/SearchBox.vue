<template>
  <div class="searchBoxContainer">
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
      if (value.length == 0) {
        alert("검색어를 입력하세요.");
        return;
      } else if (value.length < 2) {
        alert("검색어가 너무 짧습니다.");
        return;
      }

      // 비즈니스 로직
      this.$store.commit("SET_SEARCH_KEYWORD", value);
      this.$store.dispatch("FETCH_SEARCH_RESULT", value);
      this.$router.push(`/search/${this.searchKeyword}`);
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 400;
  font-style: normal;
}
.searchBoxContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% * 0.07);
}
.searchBox {
  width: 40%;
  height: 60%;
  border: 1px solid #282828;
}
.searchBox input {
  width: 90%;
  height: 100%;
  padding: 0 10px;
  border: none;
  font: normal 500 16px/ 22px "Pretendard-Regular";
  text-align: center;
}
.searchBox input:focus {
  outline: none;
}
.searchBox button {
  width: 10%;
  height: 100%;
  border: none;
  color: #282828;
  font-size: 16px;
  background: none;
  cursor: pointer;
}
@media (max-width: 768px) {
  .searchBox {
    width: 85%;
  }
}
</style>