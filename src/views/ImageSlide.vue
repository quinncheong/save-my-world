<template>
  <div class="community">
    <!-- header -->
      <div class="row">
      <div class="col-12"> 
        <splide>
          <splide-slide>
            <img src="https://img-comparison-slider.sneas.io/demo/images/before.webp">
          </splide-slide>
          <splide-slide>
            <img src="https://img-comparison-slider.sneas.io/demo/images/after.webp">
          </splide-slide>
        </splide>
        <img-comparison-slider>
          <!-- eslint-disable -->
          <img
            slot="first"
            src="https://img-comparison-slider.sneas.io/demo/images/before.webp"
          />
          <img
            slot="second"
            src="https://img-comparison-slider.sneas.io/demo/images/after.webp"
          />
          <!-- eslint-enable -->
        </img-comparison-slider>
      </div>
    </div>
    <!-- left section things -->
  </div>
</template>

<script >
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import 'img-comparison-slider';

export default {
  name: "imageCarousel",
  components: {
    Splide,
    SplideSlide,
  },
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

  .img-comparison-slider {
    width: 100%;
    --divider-width: 2px;
    --divider-color: #c0c0c0;
    --default-handle-opacity: 0.3;
  }
</style>