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


