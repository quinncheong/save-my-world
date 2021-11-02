<template>
  <div class="imageCarousel py-4">
    <div class="row">
      <div class="col-12">
        <splide :options="options">
          <splide-slide>
            <img
              src="https://climate.nasa.gov/system/gallery_images/mobile/1_bucklandak654_oli_2021117_2048x1536_before.jpg"
            />
          </splide-slide>
          <splide-slide>
            <img
              src="https://climate.nasa.gov/system/gallery_images/mobile/2_bucklandak654_oli_2021133_2048x1536-after.jpg"
            />
          </splide-slide>
        </splide>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
  name: "imageCarol",
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
</style>
