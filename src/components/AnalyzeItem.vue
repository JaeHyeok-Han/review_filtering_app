<template>
  <div class="emotionItemContainer">
    {{ item }}
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  computed: {
    emotionItem() {
      return this.$store.getters.GET_EMOTION;
    },
  },
};
</script>

<style>
</style>