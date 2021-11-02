<template>
  <div class="community">
    <div class="row" style="text-align: left">
      <div class="col">
        <span class="border-end px-2"><strong>Global Climate Change</strong></span>
        <span class="px-2"><i>Vital signs of the Planet</i></span>
      </div>
    </div>
    <br>
    <div class="card" style="width: 18rem; color: grey">
      <img class="card-img-top" src="../assets/img/clothes.png" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <!-- header --> 
        
        <!-- <div class="jumbotron jumbotron-fluid bg-secondary">
          <div class="container">
            <imageCarol/>
            <h1 class="display-">Ice Jam Floods Region in Northwest Alaska</h1>
              <p class="lead">BEFORE AND AFTER</p>
              <p>
                These false color images show a portion of northwest Alaska before and during widespread flooding in May 2021. Ice and snow appear light blue, liquid water is dark blue or black, and bare ground is yellowish brown. Chunks of ice jammed and blocked the flow of the Buckland River, which then overran its banks. Five feet of water inundated the local community, according to a statement released by Alaska Governor Dunleavy's office.
              </p>
          </div>
        </div> -->
      <imageSlider/>
    <!-- left section things -->
    
  </div>
</template>

<script >
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import 'img-comparison-slider';
import imageCarol from "../components/ImageOfChange/ImageCarousel.vue";
import imageSlider from "../components/ImageOfChange/ImageSlider.vue";

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