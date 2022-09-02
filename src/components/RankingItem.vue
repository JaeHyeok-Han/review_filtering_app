<template>
  <div class="rankingItem">
    {{ item }}
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