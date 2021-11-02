<template>
  <Splide :options="thumbsOptions" ref="thumbs">
    <SplideSlide :key="index" v-for="(image, index) of images">
      <img style="width: 230px" :src="getUrl(image.img1)" :alt="image.title" />
    </SplideSlide>
  </Splide>
  <br />
  <Splide :options="mainOptions" ref="main">
    <SplideSlide :key="index" v-for="(image, index) of images">
      <!-- <img style="width: 230px" :src="getUrl(image.img1)" :alt="image.title" /> -->
      <img-slider
        class="img-slider"
        :img-a="getUrl(image.img1)"
        :img-b="getUrl(image.img2)"
      ></img-slider>
    </SplideSlide>
  </Splide>
</template>

<script>
// import "img-comparison-slider";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import ImageCard from "./ImageCard.vue";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { defineComponent, onMounted, ref } from "vue";
import ImgSlider from "./ImgSlider.vue";

export default defineComponent({
  name: "ImageSplider",
  components: {
    Splide,
    SplideSlide,
    ImageCard,
    ImgSlider
  },
  props: ["images", "getUrl"],

  setup() {
    const main = ref();
    const thumbs = ref();
    const stdOptions = {
      rewind: true,
      type: "loop",
      perPage: 4,
      perMove: 1,
      gap: "0.5rem",
      arrows: false,
      focus: "left",
      pagination: false,
      height: "100%",
      breakpoints: {
        // Mobile
        320: {
          perPage: 3,
          gap: "10px",
          height: "100%",
        },
        // Tablet
        768: {
          perPage: 3,
          gap: "0.5rem",
          height: "100%",
        },
        // Desktop
        // 1024: {
        //     perPage: 3,
        //     gap: "0px",
        //     height: "100%"
        // }
      },
    };

    const mainOptions = {
      type: "loop",
      perPage: 1,
      perMove: 1,
      gap: "1rem",
      pagination: false,
      drag: false,
    };

    const thumbsOptions = {
      type: "loop",
      rewind: true,
      gap: "1rem",
      pagination: false,
      fixedWidth: 110,
      fixedHeight: 70,
      cover: true,
      focus: "center",
      isNavigation: true,
      updateOnMove: true,
      perPage: 4,
      arrows: false,
      breakpoints: {
        // Mobile
        320: {
          perPage: 3,
          gap: "10px",
          height: "100%",
        },
        // Tablet
        768: {
          perPage: 4,
          gap: "0.5rem",
          height: "100%",
        },
        // Desktop
        // 1024: {
        //     perPage: 3,
        //     gap: "0px",
        //     height: "100%"
        // }
      },
    };

    onMounted(() => {
      const thumbsSplide = thumbs.value.splide;
      if (thumbsSplide) {
        main.value.sync(thumbsSplide);
      }

      const mainSplide = main.value.splide;
      if (mainSplide) {
        thumbs.value.sync(mainSplide);
      }
    });

    return {
      main,
      thumbs,
      mainOptions,
      thumbsOptions,
    };
  },
});
</script>

<style lang="scss" scoped>
// Import the splider csss
.splide.is-active .splide__list {
  display: flex;
}
</style>
