<template>
  <div class="detailContainer">
    <app-header />
    <movie-info />
    <ul class="menu-box">
      <li v-on:click="viewReview" class="menu">리뷰보기</li>
      <li v-on:click="viewAnalyze" class="menu">분석보기</li>
    </ul>
    <review-box v-show="isReview" />
    <analyze-box v-show="!isReview" />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import MovieInfo from "../components/MovieInfo.vue";
import ReviewBox from "../components/ReviewBox.vue";
import AnalyzeBox from "../components/AnalyzeBox.vue";

export default {
  components: {
    AppHeader,
    MovieInfo,
    ReviewBox,
    AnalyzeBox,
  },
  data() {
    return {
      isReview: true,
    };
  },
  methods: {
    viewReview() {
      this.isReview = true;
    },
    viewAnalyze() {
      this.isReview = false;
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
.detailContainer {
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background: url("../images/background.png") no-repeat center center / 100%;
  background-attachment: fixed;
}
.menu-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
}
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 49%;
  height: 80%;
  border-radius: 12px;
  font: normal 500 18px / 24px "Pretendard-Regular";
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}
</style>