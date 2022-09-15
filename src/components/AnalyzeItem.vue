<template>
  <div class="emotionItemContainer">
    <div class="progressBox">
      <div class="po" :id="`${this.item.category}po`">
        {{ this.item.per }} %
      </div>
      <div class="ne" :id="`${this.item.category}ne`">
        {{ 100 - this.item.per }} %
      </div>
    </div>
    <p>{{ ca }}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      cate: {
        visual: "영상미",
        direction: "연출",
        acting: "연기",
        story: "스토리",
        ost: "음향",
      },
    };
  },
  computed: {
    emotionItem() {
      return this.$store.getters.GET_EMOTION;
    },
    ca() {
      return this.cate[this.item.category];
    },
  },
  mounted() {
    const po = document.querySelector(`#${this.item.category}po`);
    const ne = document.querySelector(`#${this.item.category}ne`);
    po.style.width = `${this.item.per}%`;
    ne.style.width = `${100 - Number(this.item.per)}%`;
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
.emotionItemContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
}
.progressBox {
  display: flex;
  align-items: center;
  width: 100%;
  height: 45%;
  border-radius: 50px;
  overflow: hidden;
}
.progressBox div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}
.po {
  background: #20bf55;
}
.ne {
  background: #fc575e;
}
.emotionItemContainer p {
  width: 100%;
  height: 30%;
  margin-top: 5px;
  text-align: center;
  font: normal 500 18px / 24px "Pretendard-Regular";
}
</style>