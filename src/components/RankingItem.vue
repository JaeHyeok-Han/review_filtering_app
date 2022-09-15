<template>
  <div class="itemContainer">
    <Tilt :options="this.option">
      <div class="item">
        <img
          v-show="this.item.poster !== ''"
          :src="this.item.poster"
          alt="포스터 이미지"
        />
        <div class="blur"></div>
        <div class="info">
          <h2>{{ item.title }}</h2>
          <div>
            <span>감독: </span>
            <p>{{ item.director }}</p>
          </div>
          <div>
            <span>출연: </span>
            <p>{{ item.actor }}</p>
          </div>
          <div>
            <span>장르: </span>
            <p>{{ item.genre }}</p>
          </div>
          <div>
            <span>줄거리: </span>
            <p>{{ item.plot }}</p>
          </div>
        </div>
      </div>
    </Tilt>
  </div>
</template>

<script>
import Tilt from "vanilla-tilt-vue";

export default {
  props: {
    item: Object,
    rank: Number,
  },
  components: {
    Tilt,
  },
  data() {
    return {
      option: { max: 25, speed: 300 },
    };
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
.itemContainer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 500px;
  border-radius: 15px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
}
.item img {
  position: absolute;
  width: 70%;
  transition: 0.5s;
}
.blur {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  transition: 0.5s;
}
.item:hover .blur {
  background: rgba(0, 0, 0, 0.7);
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 50px 30px;
  border-radius: 15px;
  transition: 0.5s;
  transform: translateY(100px);
  opacity: 0;
}
.item:hover img {
  width: 60%;
}
.item:hover .info {
  transform: translateY(0px);
  opacity: 1;
}
.info h2 {
  margin-bottom: 20px;
  font: normal 700 32px / 42px "Pretendard-Regular";
}
.info div {
  display: flex;
  margin-bottom: 3px;
  font: normal 500 18px / 24px "Pretendard-Regular";
}
.info div span {
  width: 20%;
}
.info div p {
  width: 80%;
}
</style>