<template>
  <Splide :options="options">
    <SplideSlide :key="index" v-for="(image, index) of images">
      <!-- <image-card :image="image.src" :title="image.title" /> -->
        <img style="width: 200px" :src="getUrl(image.img1)" :alt="image.title" />
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import ImageCard from './ImageCard.vue';
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
    name: "ImageSplider",
    components: {
        Splide,
        SplideSlide,
        ImageCard
    },
    props: ["images", "getUrl"],
    data() {
        return {
            options: {
                rewind: true,
                type: "loop",
                perPage: 6,
                perMove: 1,
                gap: "0.5rem",
                arrows: false,
                focus: 'left',
                pagination: false,
                // breakpoints: {
                //     // Mobile
                //     320: {
                //         perPage: 1,
                //         gap: "0px",
                //         height: "100%"
                //     },
                //     // Tablet
                //     768: {
                //         perPage: 1,
                //         gap: "0px",
                //         height: "100%"
                //     },
                //     // Desktop
                //     1024: {
                //         perPage: 1,
                //         gap: "0px",
                //         height: "100%"
                //     }
                // }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
// Import the splider csss
.splide.is-active .splide__list {
    display: flex;
}

</style>
