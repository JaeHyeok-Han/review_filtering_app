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

<style>
</style>