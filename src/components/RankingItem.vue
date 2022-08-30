<template>
  <div class="rank-container">
    <div class="rank-item">
      <img
        :src="getItem.posters"
        :alt="`${getItem.title}포스터`"
        class="poster"
      />
    </div>
  </div>
</template>

<script>
import defaultImage from "../images/defaultImage.jpg";

export default {
  props: {
    item: Object,
    rank: Number,
  },
  computed: {
    getItem() {
      let {
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
};
</script>

<style scoped>
.rank-item {
  padding: 20px;
}
</style>