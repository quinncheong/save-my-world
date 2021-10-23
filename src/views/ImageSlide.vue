<template>
  <div class="community py-4">
    <div class="row">
      <div class="col-12" height="200px"> 
       <imageSlide />
      </div>
      <imageCarol />
    </div>
  </div>
</template>

<script >
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import imageSlide from "../components/ImageSlider.vue";
import imageCarol from "../components/ImageCarousel.vue";

export default {
  name: "Images",
  components: {
    Splide,
    SplideSlide,
    imageSlide,
    imageCarol
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
</style>
