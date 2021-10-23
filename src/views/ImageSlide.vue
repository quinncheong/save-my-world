<template>
  <div class="community">
    <!-- header -->
      <div class="row">
      <div class="col-12"> 
        <imageSlider/>
        <imageCarol/>
      </div>
    </div>
    <!-- left section things -->
    
  </div>
</template>

<script >
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import 'img-comparison-slider';
import imageCarol from "../components/ImageCarousel.vue";
import imageSlider from "../components/ImageSlider.vue";

export default {
  name: "imageCarousel",
  components: {
    Splide,
    SplideSlide,
    imageCarol,
    imageSlider

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