<template>
  <div class="movieContainer">
    <div class="movie">
      <img
        :src="
          movie.poster ? movie.poster : require('../images/defaultImage.jpg')
        "
        alt="포스터 이미지"
      />
      <div class="infoBox">
        <h2>{{ movie.title }}</h2>
        <div>
          <span>감독: </span>
          <p>{{ movie.director }}</p>
        </div>
        <div>
          <span>출연: </span>
          <p>{{ movie.actor }}</p>
        </div>
        <div>
          <span>장르: </span>
          <p>{{ movie.genre }}</p>
        </div>
        <div>
          <span>줄거리: </span>
          <p>{{ movie.plot }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    movie() {
      return this.$store.getters.GET_MOVIE;
    },
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
.movieContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45%;
  padding: 20px;
  box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
}
.movie {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
}
.movie img {
  width: 175px;
  height: 250px;
  margin: 0 30px 0 20px;
  border-radius: 8px;
}
.movie .infoBox {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 60%;
}
.infoBox h2 {
  margin-bottom: 15px;
  font: normal 700 24px / 32px "Pretendard-Regular";
}
.infoBox div {
  display: flex;
  font: normal 500 16px / 22px "Pretendard-Regular";
}
.infoBox div span {
  width: 15%;
}
.infoBox div p {
  width: 85%;
}
</style>