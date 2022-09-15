<template>
  <div class="reviewContainer">
    <review-item
      v-for="(item, index) in review"
      :key="index"
      :item="item"
      :index="index"
    />
  </div>
</template>

<script>
import ReviewItem from "./ReviewItem.vue";

export default {
  components: {
    ReviewItem,
  },
  computed: {
    review() {
      return this.$store.getters.GET_REVIEW;
    },
  },
};
</script>

<style scoped>
.reviewContainer {
  width: 100%;
  padding: 20px;
}
</style>