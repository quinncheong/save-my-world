<template>
  <div class="second" id="second">
  <slot name="second"><slot name="before"></slot></slot>
</div>
<div class="first" id="first">
  <div class="first-overlay">
    <div class="first-overlay-container" id="firstImageContainer">
      <slot name="first"><slot name="after"></slot></slot>
    </div>
  </div>
  <div class="handle-container">
    <div class="divider"></div>
    <div class="handle">
      <slot name="handle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="default-handle"
          viewBox="-8 -3 16 6"
        >
          <path
            d="M -5 -2 L -7 0 L -5 2 M 5 -2 L 7 0 L 5 2"
            fill="none"
            vector-effect="non-scaling-stroke"
          />
        </svg>
      </slot>
    </div>
  </div>
</div>
</template>

<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

export default {
  name: 'ImageSlider',
  components: {
    ImgComparisonSlider,
  },
};
</script>

<style lang="sass">
    img-comparison-slider {
        visibility: hidden;
    }

    img-comparison-slider [slot='second'] {
        display: none;
    }

    img-comparison-slider.rendered {
        visibility: inherit;
    }

    img-comparison-slider.rendered [slot='second'] {
        display: unset;
    }
</style>


=======
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
