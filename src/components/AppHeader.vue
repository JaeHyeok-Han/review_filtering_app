<template>
  <div class="header-container">
    <router-link to="/main" class="app-header">Search your Movie</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.app-header {
  font-size: 2rem;
  margin: 20px auto;
  background: linear-gradient(315deg, #d1bad2 0%, #a7becc 74%);
  color: transparent;
  background-clip: text;
  font: bold 2rem "IBM Plex Sans KR", sans-serif;
}
</style>