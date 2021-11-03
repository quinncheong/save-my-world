<template>
  <div class="community">
    <div class="image-change-wrapper">
      <!-- header -->
      <h2 class="chart-title mb-3">Images of the World</h2>
      <p class="chart-details text-center w-75 mb-3">
        The best way to see Climate change in effect, is if we can see how the Earth is changing. Throughout the years, many places on earth have changed drastically - and not for the better.
      </p>
      <p class="chart-select mb-3 fst-italic">Select an image and see how different the world has become</p>
      <image-of-change />
      <br />
      <div class="bg-secondary">
        <div class="container">
          <h1 class="display-">Ice Jam Floods Region in Northwest Alaska</h1>
          <p class="lead">BEFORE AND AFTER</p>
          <p>
            These false color images show a portion of northwest Alaska before and
            during widespread flooding in May 2021. Ice and snow appear light
            blue, liquid water is dark blue or black, and bare ground is yellowish
            brown. Chunks of ice jammed and blocked the flow of the Buckland
            River, which then overran its banks. Five feet of water inundated the
            local community, according to a statement released by Alaska Governor
            Dunleavy's office.
          </p>
        </div>
        <imageSlider/>
        <imageCard />
      <!-- left section things -->
      </div>
    </div>
  <div>
    <image-of-change :images="images" />
  </div>
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

  // display 70% width on extra large screen sizes
  @media screen and (min-width: 1200px) {
    .image-change-wrapper {
      width: 60%;
    }
  }

</style>
