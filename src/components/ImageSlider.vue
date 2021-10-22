<template>
  <div class="imageCarousel py-4">
    <!-- header -->
    <!-- <div class="row">
      <div class="col-12">
        <div class="d-md-flex align-items-center mb-3">
          <h1 class="p-0 m-0">Images for Changes</h1>
        </div>
      </div>
    </div> -->
    <div class="row">
      <div class="col-12"> 
        <!-- <img width="100%" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/marioPhoto-1.jpg" alt="">
        <img width="100%" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/marioPhoto-2.jpg" alt=""> -->
        <!-- eslint-disable -->
        <!-- <img-comparison-slider class="styled">
          <img
            slot="first"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/marioPhoto-1.jpg"
          />
          <img
            slot="second"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/marioPhoto-2.jpg"
          /> -->
        <!-- eslint-enable -->
        <!-- </img-comparison-slider> -->
        <splide :options="options">
          <splide-slide>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/marioPhoto-1.jpg">
          </splide-slide>
          <splide-slide>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/marioPhoto-2.jpg">
          </splide-slide>
        </splide>
      </div>
    </div>
    <!-- left section things -->
  </div>
</template>

<script >
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
  name: "imageCarousel",
  components: {
    Splide,
    SplideSlide,
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
