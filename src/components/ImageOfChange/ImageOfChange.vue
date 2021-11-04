<template>
  <div class="image-change-wrapper">
    <!-- header -->
    <h2 class="chart-title mb-3">Images of the World</h2>
    <p class="chart-details text-center w-75 mb-3">
      The best way to see Climate change in effect, is if we can see how the
      Earth is changing. Throughout the years, many places on earth have changed
      drastically - and not for the better.
    </p>
    <p class="chart-select mb-3 fst-italic">
      Select an image and see how different the world has become
    </p>
    <!-- insert image splider component -->
    <image-splider @on-active-splide="handleActiveSplide" :get-url="getUrl" :images="images" />
    <!-- Body of the image slider component for the text -->
    <image-slider-body :image="selectedImage" />
  </div>
</template>

<script>
// import "img-comparison-slider";
// import ImgSlider from "./ImgSlider.vue";
import ImageSplider from "./ImageSplider.vue";
import ImageSliderBody from './ImageSliderBody.vue';

export default {
  name: "imageSlide",
  components: {
    ImageSplider,
    ImageSliderBody,
  },
  props: ["images"],
  data() {
    return {
      selectedImage: {}
    };
  },
  methods: {
    // return item from sources array in data with index
    getItem(index) {
      return this.options.sources[index];
    },
    getUrl(pic) {
      return require(`../../assets/imagesChanges/${pic}`);
    },
    handleActiveSplide(index) {
      console.log('handling the onclick event')
      console.log(index)
      let selected = this.images[index];
      console.log(selected)
      this.selectedImage = selected
    }
  },
};
</script>

<style lang="scss" scoped>
.image-change-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-between;
  font-size: $variable-font;
}

  // display 70% width on desktop
  @media screen and (min-width: 768px) {
    .image-change-wrapper {
      width: 70%;
    }
  }

  // display 70% width on large screen sizes
  @media screen and (min-width: 992px) {
    .image-change-wrapper {
      width: 60%;
    }
  }

  // // display 70% width on extra large screen sizes
  @media screen and (min-width: 1200px) {
    .image-change-wrapper {
      width: 60%;
    }
  }

</style>
