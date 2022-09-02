<template>
  <div class="rankingContainer">
    <div class="rankingItem">{{ item }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    rank: Number,
  },
};
</script>

<style>
</style>