<template>
  <div>
    <app-header />
    <detail-item />
    <ul class="menu-box">
      <li v-on:click="viewReview" class="menu">리뷰보기</li>
      <li v-on:click="viewAnalyze" class="menu">분석보기</li>
    </ul>
    <review-box v-show="review" />
    <analyze-box v-show="!review" />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import DetailItem from "../components/DetailItem.vue";
import ReviewBox from "../components/ReviewBox.vue";
import AnalyzeBox from "../components/AnalyzeBox.vue";

export default {
  data() {
    return {
      review: true,
    };
  },
  components: {
    AppHeader,
    DetailItem,
    ReviewBox,
    AnalyzeBox,
  },
  methods: {
    viewReview() {
      this.review = true;
    },
    viewAnalyze() {
      this.review = false;
    },
  },
  created() {
    this.$store.dispatch(
      "FETCH_REVIEW",
      JSON.stringify({
        id: this.$store.getters.GET_CURRENT_MOVIE.DOCID,
        title: this.$store.getters.GET_CURRENT_MOVIE.title.replace(
          /(\s*)/g,
          ""
        ),
      })
    );
  },
};
</script>

<style>
</style>