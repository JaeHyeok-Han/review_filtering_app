<template>
  <div v-on:click="toDetail" class="searchItem-container">
    <div class="poster-box">
      <img :src="movie.posters" :alt="`${movie.title}포스터`" />
    </div>
    <div class="info-box">
      <span>{{ movie.title }}</span>
      <br />
      <small>개봉 : {{ movie.prodYear }}</small>
      <br />
      <small>시간 : {{ movie.runtime }}분</small>
      <br />
      <small>장르 : {{ movie.genre }}</small>
    </div>
  </div>
</template>

<script>
import defaultImage from "../images/defaultImage.jpg";

export default {
  props: {
    item: Object,
  },
  computed: {
    movie() {
      let {
        DOCID,
        title,
        prodYear,
        directors,
        actors,
        nation,
        plots,
        runtime,
        rating,
        genre,
        posters,
        repRlsDate,
        movieId,
        movieSeq,
      } = this.item;

      title = title.replace(/[(!HS)(!HE)]/gi, "");
      title = title.trim();
      const director = [];
      directors.director.forEach((ele) => {
        director.push(ele.directorNm);
      });
      directors = director.join(", ");
      const actor = [];
      actors.actor.forEach((ele, index) => {
        if (index < 5) {
          actor.push(ele.actorNm);
        }
      });
      actors = actor.join(", ");
      let plot = "";
      plots.plot.forEach((ele) => {
        if (ele.plotLang === "한국어") {
          plot = ele.plotText;
        }
      });
      plots = plot;
      genre = genre.split(",");
      genre = genre.join(", ");
      posters = posters.split("|")[0];
      if (posters === "") {
        posters = defaultImage;
      }

      return {
        DOCID,
        title,
        prodYear,
        directors,
        actors,
        nation,
        plots,
        runtime,
        rating,
        genre,
        posters,
        repRlsDate,
        movieId,
        movieSeq,
      };
    },
  },
  methods: {
    toDetail() {
      this.$store.commit("SET_CURRENT_MOVIE", this.movie);
      this.$router.push({ name: "detail", params: { item: this.movie } });
    },
  },
};
</script>

<style scoped>
.searchItem-container {
  width: 100%;
  display: flex;
  padding: 5px;
  border-radius: 10px;
}
.poster-box {
  width: 20%;
}
img {
  width: 100%;
}
.info-box {
  padding: 4px 0 0 10px;
}
</style>