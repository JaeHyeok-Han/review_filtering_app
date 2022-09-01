<template>
  <div class="reviewContainer">
    <review-item
      v-for="(item, index) in reviewItem"
      :sentence="item"
      :key="index"
    />
    <button type="button" @click="increasePages" class="moreBtn">더보기</button>
  </div>
</template>

<script>
import ReviewItem from "./ReviewItem.vue";

export default {
  components: {
    ReviewItem,
  },
  methods: {
    increasePages() {
      this.$store.commit("INCREASE_PAGES");
    },
  },
  computed: {
    reviewItem() {
      return this.$store.getters.GET_REVIEW;
    },
  },
  beforeDestroy() {
    this.$store.commit("INIT");
  },
};
</script>

<style>
</style>