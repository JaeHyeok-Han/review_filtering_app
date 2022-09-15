<template>
  <div class="rankingContainer">
    <div class="moveBtn"><i class="fas fa-chevron-left"></i></div>
    <div class="movieContainer">
      <div class="slider">
        <ranking-item
          class="movie"
          v-for="(item, index) in ranking"
          :key="index"
          :item="item"
          :rank="index"
        />
      </div>
    </div>
    <div class="moveBtn"><i class="fas fa-chevron-right"></i></div>
  </div>
</template>

<script>
import RankingItem from "./RankingItem.vue";

export default {
  components: {
    RankingItem,
  },
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    ranking() {
      return this.$store.getters.GET_RANKING;
    },
  },
  mounted() {
    const moveBtn = document.querySelectorAll(".moveBtn");
    const slider = document.querySelector(".slider");
    moveBtn[0].addEventListener("click", () => {
      if (this.count == 0) {
        slider.style.left = `${(slider.offsetWidth / 5) * -4}px`;
        this.count = 4;
      } else {
        slider.style.left = `${slider.offsetLeft + slider.offsetWidth / 5}px`;
        this.count--;
      }
    });
    moveBtn[1].addEventListener("click", () => {
      if (this.count === 4) {
        slider.style.left = `0px`;
        this.count = 0;
      } else {
        slider.style.left = `${slider.offsetLeft - slider.offsetWidth / 5}px`;
        this.count++;
      }
    });
  },
};
</script>

<style scoped>
.rankingContainer {
  display: flex;
  width: 100%;
  height: calc(100% * 0.83);
  padding-top: 20px;
}
.moveBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  color: #282828;
  font-size: 40px;
}
.moveBtn i {
  cursor: pointer;
}
.movieContainer {
  position: relative;
  width: 80%;
  height: 100%;
  overflow: hidden;
}
.slider {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 500%;
  height: 100%;
  transition: 1s;
}
</style>