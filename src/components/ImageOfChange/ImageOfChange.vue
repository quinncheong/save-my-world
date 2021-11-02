<template>
  <div>
    <!-- insert template for bootstrap carousel -->
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <!-- Main active one -->
        <div class="carousel-item active">
          <img-slider
            class="img-slider"
            img-a="https://climate.nasa.gov/system/gallery_images/mobile/1_rising_seas_in_charleston_2048x1536_before.jpg"
            img-b="https://climate.nasa.gov/system/gallery_images/mobile/1_rising_seas_in_charleston_2048x1536_before.jpg"
          ></img-slider>
        </div>

        <div
          :key="index"
          v-for="(srcset, index) of sources"
          class="carousel-item"
        >
          <img-slider
            class="img-slider"
            :img-a="getUrl(srcset.img1)"
            :img-b="getUrl(srcset.img2)"
          ></img-slider>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import "img-comparison-slider";
import ImgSlider from "./ImgSlider.vue";

export default {
  name: "imageSlide",
  components: {
    ImgSlider,
  },
  data() {
    return {
      img1: "https://climate.nasa.gov/system/gallery_images/mobile/1_rising_seas_in_charleston_2048x1536_before.jpg",
      img2: "https://climate.nasa.gov/system/gallery_images/mobile/2_rising_seas_in_charleston_2048x1536_after.jpg",
      sources: [
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
  methods: {
    // return item from sources array in data with index
    getItem(index) {
      return this.options.sources[index];
    },
    getUrl(pic) {
      return require(`../../assets/imagesChanges/${pic}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.img-slider {
  width: 100%;

  // 70% width on small screens
  @media screen and (min-width: 575.98px) {
    width: 70%;
  }
  // @media screen and (min-width: 768px) {
  //   width: 70%;
  // }
}
// .img-comparison-slider {
//   width: 100%;
//   --divider-width: 2px;
//   --divider-color: #c0c0c0;
//   --default-handle-opacity: 0.3;
// }
</style>
