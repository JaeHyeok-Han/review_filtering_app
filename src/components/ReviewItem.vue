<template>
  <div class="reviewItem">
    <div class="authBox">{{ this.item.auth }}</div>
    <div class="rateBox" :id="`box${index}`"></div>
    <div class="textBox">{{ this.item.text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    index: Number,
  },
  mounted() {
    const rateBox = document.querySelector(`#box${this.index}`);
    let rate = Number(this.item.rate);
    for (let i = 0; i < 5; i++) {
      const icon = document.createElement("i");
      if (rate >= 2) {
        rate -= 2;
        icon.classList.add("fas", "fa-star");
        rateBox.appendChild(icon);
      } else if (rate === 1) {
        rate -= 1;
        icon.classList.add("fas", "fa-star-half-alt");
        rateBox.appendChild(icon);
      } else {
        icon.classList.add("far", "fa-star");
        rateBox.appendChild(icon);
      }
    }
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
.reviewItem {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 60px;
  padding: 15px;
  margin: 0 0 10px;
  border-radius: 12px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
}
.authBox {
  width: 15%;
  font: normal 500 14px / 20px "Pretendard-Regular";
}
.rateBox {
  width: 10%;
}

.textBox {
  width: 75%;
  padding-left: 5px;
  font: normal 500 14px / 20px "Pretendard-Regular";
}
</style>