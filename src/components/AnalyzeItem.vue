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

<style scoped>
.emotionItemContainer {
  width: 100%;
  height: 80px;
}
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40%;
  padding: 0 20px;
}
.content {
  display: flex;
  width: 100%;
  height: 60%;
  padding: 0 5px;
}
.po {
  height: 60%;
  background-color: rgb(74 208 95);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.na {
  height: 60%;
  background-color: rgb(255 70 70);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>