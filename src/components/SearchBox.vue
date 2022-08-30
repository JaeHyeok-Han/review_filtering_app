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

<style scoped>
.search-container {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
}
.search-box {
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  border: 4px solid transparent;
  border-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
  border-image-slice: 1;
  overflow: hidden;
}
.search-input {
  width: 90%;
  height: 100%;
  border: none;
  font-size: 1.2rem;
  padding-left: 5%;
}
.search-input:focus {
  outline: none;
}
.search-btn {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(315deg, #d1bad2 0%, #a7becc 74%);
  color: transparent;
  background-clip: text;
  font-size: 1.3rem;
}
</style>