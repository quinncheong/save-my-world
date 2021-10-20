<template>
  <div class="card-bg col-5 col-sm-3">
    <img src="@/assets/img/globe.png" alt="" />
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
  background-color: $tertiary-color-opacity;
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  border: 1px solid white;
  margin-bottom: 7%;

  &:hover {
    background-color: $bg-color-secondary;
    cursor: pointer;
  }

  .card-title {
    text-overflow: clip;
    word-wrap: break-word;
    align-self: center;
  }
}

@media screen and (max-width: 300px) {
  .card-bg {
    font-size: 18px;
    width: 100%;
  }
}
</style>
