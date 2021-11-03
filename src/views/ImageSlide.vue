<template>
  <div >
    <image-of-change :images="images" />
  </div>
</template>

<script >
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import 'img-comparison-slider';
import imageCarol from "../components/ImageOfChange/ImageCarousel.vue";
import imageSlider from "../components/ImageOfChange/ImageSlider.vue";
// import ImageCard from "../components/ImageOfChange/ImageCard.vue";
import ImageOfChange from "../components/ImageOfChange/ImageOfChange.vue";

export default {
  name: "imageCarousel",
  components: {
    Splide,
    SplideSlide,
    imageCarol,
    imageSlider,
    // ImageCard,
    ImageOfChange,
  },
  data() {
    return {
      images: [
        {
          id: 8,
          // relative import image
          img1: "img1A.jpeg",
          img2: "img1B.jpeg",
          description: "This is a test description",
          title: 'this is a test title'
          
        },
        {
          id: 1,
          // relative import image
          img1: "img2A.jpeg",
          img2: "img2B.jpeg",
        },
        {
          id: 2,
          img1: "img3A.jpeg",
          img2: "img3B.jpeg",
        },
        {
          id: 3,
          img1: "img4A.jpeg", // 4A is wrong and need to change it
          img2: "img4B.jpeg",
        },
        {
          id: 4,
          img1: "img5A.jpeg",
          img2: "img5B.jpeg",
        },
        {
          id: 5,
          img1: "img6A.jpeg",
          img2: "img6B.jpeg",
        },
        {
          id: 6,
          img1: "img7A.jpeg",
          img2: "img7B.jpeg",
        },
        // {
        //   id: 7,
        //   img1: "img4A.jpeg",
        //   img2: "img4B.jpeg",
        // }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
