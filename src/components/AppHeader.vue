<template>
  <div class="headerContainer">
    <router-link to="/main" class="header">MovieCom</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@font-face {
  font-family: "PyeongChangPeace-Bold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2")
    format("woff2");
  font-weight: 700;
  font-style: normal;
}
.headerContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% * 0.1);
}
.headerContainer a {
  font: normal 700 40px / 52px "PyeongChangPeace-Bold";
  color: #282828;
  text-decoration: none;
}
</style>