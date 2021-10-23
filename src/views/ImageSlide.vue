<template>
  <div class="community">
    <!-- header -->
    <h1>Look at the current live situation</h1>
    <!-- <div class="row">
      <div class="col-sm-6">
        <h1>Do what you can for the community</h1>
      </div>
      <div class="col-sm-6">
        <img src="@/assets/img/community.png" alt="" />
      </div>
    </div> -->
    <!-- line breaking the header and the seachbar + campaigns -->
    <div class="img-comp-container">
      <div class="img-comp-img">
        <img src="/assets/img/clothes.png" width="300" height="200">
      </div>
      <div class="img-comp-img img-comp-overlay">
        <img src="/assets/img/clothes.png" width="300" height="200">
      </div>
    </div>
    <ImgComparisonSlider>
    <!-- eslint-disable -->
    <img
      slot="first"
      style="width: 100%"
      src="https://img-comparison-slider.sneas.io/demo/images/before.webp"
    />
    <img
      slot="second"
      style="width: 100%"
      src="https://img-comparison-slider.sneas.io/demo/images/after.webp"
    />
    <!-- eslint-enable -->
  </ImgComparisonSlider>
  </div>
</template>

<script >
export default {
  name: "ImageSlider",
  components: {
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.community {
  display: flex;
  flex-direction: column;
}

hr {
  border: solid 2px white;
}

* {box-sizing: border-box;}

.img-comp-container {
  position: relative;
  height: 200px; /*should be the same height as the images*/
}

.img-comp-img {
  position: absolute;
  width: auto;
  height: auto;
  overflow: hidden;
}

.img-comp-img img {
  display: block;
  vertical-align: middle;
}

.img-comp-slider {
  position: absolute;
  z-index: 9;
  cursor: ew-resize;
  /*set the appearance of the slider:*/
  width: 40px;
  height: 40px;
  background-color: #2196F3;
  opacity: 0.7;
  border-radius: 50%;
}
</style>
