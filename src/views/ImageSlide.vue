<template>
  <div class="community py-4">
    <div class="row">
      <div class="col-12"> 
       <imageCarousel />
      </div>
    </div>
  </div>
</template>

<script >
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import imageCarousel from "../components/ImageSlider.vue";

export default {
  name: "ImageSlider",
  components: {
    Splide,
    SplideSlide,
    imageCarousel
  },
  data() {
    return {
      options: {
        rewind : true,
        width  : 800,
        gap    : '1rem',
      },
    };
  },
}
</script>

<style lang="scss" scoped>
  .community {
    display: inline-flex;
    flex-direction: column;
  }

  // img-comparison-slider {
  //   --divider-width: 2px;
  //   --divider-color: #c0c0c0;
  //   --handle-opacity: 0.3;
  // }
</style>
