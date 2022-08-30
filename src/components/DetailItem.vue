<template>
  <div class="detailItem-container">
    <h2 class="movie-title">{{ movie.title }}</h2>
    <div class="poster-box">
      <img :src="movie.posters" :alt="`${movie.title}포스터`" />
    </div>
    <ul class="detailItem-Box">
      <li>
        개봉 : {{ movie.repRlsDate.slice(0, 4) }}년
        {{ movie.repRlsDate.slice(4, 6) }}월 {{ movie.repRlsDate.slice(6) }}일
      </li>
      <li>감독 : {{ movie.directors }}</li>
      <li>배우 : {{ movie.actors }}</li>
      <li>장르 : {{ movie.genre }}</li>
      <li>관람등급 : {{ movie.rating }}</li>
      <li>줄거리 : {{ movie.plots }}</li>
      <li>상영시간 : {{ movie.runtime }}</li>
      <div class="btn"><i class="fas fa-caret-down"></i></div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: {},
    };
  },
  computed: {
    getItem() {
      return this.movie;
    },
  },
  created() {
    this.movie = this.$route.params.item;
  },
  mounted() {
    const box = document.querySelector(".detailItem-Box");
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", () => {
      box.classList.toggle("open");
      btn.classList.toggle("open");
    });
  },
};
</script>

<style scoped>
.detailItem-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
.movie-title {
  width: 100%;
  text-align: center;
  padding: 0 5px;
  margin-bottom: 15px;
}
.detailItem-Box {
  width: 100%;
  height: 150px;
  margin: 20px 0 0;
  overflow: hidden;
  transition: 1s;
}
.btn {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  bottom: 0;
  background: linear-gradient(
    0deg,
    rgba(238, 238, 238, 1) 0%,
    rgba(238, 238, 238, 0) 100%
  );
}
.detailItem-Box.open {
  height: auto;
  overflow: none;
}
.btn.open {
  position: relative;
  background: none;
}
.fa-caret-down {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  padding: 8px;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 100%;
  font-size: 1.5rem;
  background: linear-gradient(315deg, #d1bad2 0%, #a7becc 74%);
  color: white;
  cursor: pointer;
}
.btn.open .fa-caret-down {
  transform: rotate(180deg);
}
</style>