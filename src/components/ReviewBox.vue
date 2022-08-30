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
.reviewContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.moreBtn {
  width: 40%;
  height: 50px;
  border-radius: 25px;
  border: none;
  background-color: #d9e4f5;
  background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
  margin: 20px;
  cursor: pointer;
}
</style>