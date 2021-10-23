<template>
  <div class="imageCarousel py-4">
    <div class="row">
      <div class="col-12">
        <img-comparison-slider>
          <!-- eslint-disable -->
          <img
            slot="first"
            src="https://climate.nasa.gov/system/gallery_images/mobile/1_bucklandak654_oli_2021117_2048x1536_before.jpg"
          />
          <img
            slot="second"
            src="https://climate.nasa.gov/system/gallery_images/mobile/2_bucklandak654_oli_2021133_2048x1536-after.jpg"
          />
          <!-- eslint-enable -->
        </img-comparison-slider>
      </div>
    </div>
  </div>
</template>

<script>
import 'img-comparison-slider';

export default {
  name: "imageSlide",
  components: {},
  data() {
    return {
      options: {
        rewind: true,
        width: 800,
        gap: "1rem",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.community {
  display: inline-flex;
  flex-direction: column;
}

</style>
