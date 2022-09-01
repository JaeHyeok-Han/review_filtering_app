<template>
  <div class="analyzeContainer">
    <analyze-item :cate="'visual'" :emo="emotionItem.visual" />
    <analyze-item :cate="'direction'" :emo="emotionItem.direction" />
    <analyze-item :cate="'acting'" :emo="emotionItem.acting" />
    <analyze-item :cate="'story'" :emo="emotionItem.story" />
    <analyze-item :cate="'ost'" :emo="emotionItem.ost" />
  </div>
</template>

<script>
import AnalyzeItem from "./AnalyzeItem.vue";

export default {
  components: {
    AnalyzeItem,
  },
  computed: {
    emotionItem() {
      return this.$store.getters.GET_EMOTION;
    },
  },
};
</script>

<style>
</style>