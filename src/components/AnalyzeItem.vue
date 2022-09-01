<template>
  <div class="emotionItemContainer">
    <div class="info">
      <i class="fas fa-thumbs-up"></i>
      {{ cateToKor }}
      <i class="fas fa-thumbs-down"></i>
    </div>
    <div class="content">
      <div class="po" :style="`width: ${emotionItem[cate][0]}%`"></div>
      <div class="na" :style="`width: ${emotionItem[cate][1]}%`"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cate: String,
  },
  computed: {
    emotionItem() {
      return this.$store.getters.GET_EMOTION;
    },
    cateToKor() {
      if (this.cate === "visual") return "영상미";
      else if (this.cate === "direction") return "연출";
      else if (this.cate === "acting") return "연기";
      else if (this.cate === "story") return "스토리";
      else return "음향";
    },
  },
};
</script>

<style>
</style>