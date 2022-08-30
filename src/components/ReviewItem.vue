<template>
  <div class="reviewItem">
    {{ this.sentence }}
  </div>
</template>

<script>
export default {
  props: {
    sentence: String,
  },
};
</script>

<style>
.reviewItem {
  width: 95%;
  margin: 2px auto;
  border-bottom: 1px solid rgb(202, 202, 202);
  padding: 5px;
}
</style>