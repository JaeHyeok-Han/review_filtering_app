<template>
  <div v-on:click="selectMovie" class="resultItem">
    <img
      :src="
        this.item.poster
          ? this.item.poster
          : require('../images/defaultImage.jpg')
      "
      alt="포스터 이미지"
    />
    <p v-show="this.item.poster === ''">{{ this.item.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  methods: {
    selectMovie() {
      this.$store.commit("SET_MOVIE", this.item);
      this.$store.dispatch("FETCH_FILTERING_DATA");
      this.$router.push(`/detail/${this.item.title}`);
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
.resultItem {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 300px;
  overflow: hidden;
  margin: 30px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
}
.resultItem img {
  height: 100%;
}
.resultItem p {
  position: absolute;
  bottom: 20px;
  font: normal 700 18px/ 24px "Pretendard-Regular";
}
</style>