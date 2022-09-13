<template>
  <div>
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
      this.review = true;
    },
    viewAnalyze() {
      this.review = false;
    },
  },
};
</script>

<style>
</style>