<template>
  <div class="card-bg col-12 col-sm-6 col-md-3 col-lg-4">
    <p class="card-title">
      {{ name }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ChartsCard",
  data() {},
  props: {
    name,
    // src,
  },
};
</script>

<style lang="scss">
.card-bg {
  @extend %bg-card-rounded;
  color: white;
  display: flex;
  flex-direction: column;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  .card-title {
    text-overflow: clip;
    word-wrap: break-word;
  }
}
</style>
