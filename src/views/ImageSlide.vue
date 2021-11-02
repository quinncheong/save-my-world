<template>
  <div class="community">
    <!-- header -->
      <div class="row">
      <div class="col-4"> 
        <div class="card text-white bg-secondary" style="width: 18rem;">
          <br>
          <imageSlider/>  
          <div class="card-body">
            <h5 v-bind:class="card-title">{{cards.title}}</h5>
                      
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        
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
      </div>
      <imageSlider/>
    </div>
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
      cards: [
        {
          // text
          id: 1,
          title: "ergreeg",
          text: "rgrgegr"
        },
        {
          id: 2,
          title: "ergreeg",
          text: "rgrgegr"
        },
        // {
        //   id: 3,
        //   img1: "img4A.jpeg", // 4A is wrong and need to change it
        //   img2: "img4B.jpeg",
        // },
        // {
        //   id: 4,
        //   img1: "img5A.jpeg",
        //   img2: "img5B.jpeg",
        // },
        // {
        //   id: 5,
        //   img1: "img6A.jpeg",
        //   img2: "img6B.jpeg",
        // },
        // {
        //   id: 6,
        //   img1: "img7A.jpeg",
        //   img2: "img7B.jpeg",
        // },
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