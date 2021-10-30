<template>
  <div class="community">
    <!-- header -->
      <div class="row">
      <div class="col-12"> 
        <imageSlider/>
        <br>
        <div class="jumbotron jumbotron-fluid bg-secondary">
          <div class="container">
            <imageCarol/>
            <h1 class="display-">Ice Jam Floods Region in Northwest Alaska</h1>
              <p class="lead">BEFORE AND AFTER</p>
              <p>
                These false color images show a portion of northwest Alaska before and during widespread flooding in May 2021. Ice and snow appear light blue, liquid water is dark blue or black, and bare ground is yellowish brown. Chunks of ice jammed and blocked the flow of the Buckland River, which then overran its banks. Five feet of water inundated the local community, according to a statement released by Alaska Governor Dunleavy's office.
              </p>
          </div>
        </div>
      </div>
    </div>
    <!-- left section things -->
    
  </div>
</template>

<script >
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import 'img-comparison-slider';
import imageCarol from "../components/ImageCarousel.vue";
import imageSlider from "../components/ImageSlider.vue";

export default {
  name: "imageCarousel",
  components: {
    Splide,
    SplideSlide,
    imageCarol,
    imageSlider

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

  .img-comparison-slider {
    width: 100%;
    --divider-width: 2px;
    --divider-color: #c0c0c0;
    --default-handle-opacity: 0.3;
  }

  .jumbotron{
    text-align: left;
    padding-bottom: 10px;
  }

</style>