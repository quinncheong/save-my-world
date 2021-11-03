<template>
  <div class="community">
    <!-- <div class="image-change-wrapper"> -->
      <!-- header -->
      <!-- <h2 class="chart-title mb-3">Images of the World</h2>
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
        <imageSlider/> -->
        <!-- <imageCard /> -->
      <!-- left section things -->
      <!-- </div>
    </div> -->
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
          title: "Deforestation in Papua, Indonesia",
          description: "The 2019 image shows an area of Papua (also known as Western New Guinea) where the forest was cleared between 2011 and 2016, reportedly to make way for plantation agriculture"
          
        },
        {
          id: 1,
          // relative import image
          img1: "img2A.jpeg",
          img2: "img2B.jpeg",
          title: "Ice Jam Floods Region in Northwest Alaska",
          description: "These false color images show a portion of northwest Alaska before and during widespread flooding in May 2021. Ice and snow appear light blue, liquid water is dark blue or black, and bare ground is yellowish brown. Chunks of ice jammed and blocked the flow of the Buckland River, which then overran its banks. Five feet of water inundated the local community, according to a statement released by Alaska Governor Dunleavy's office"
        },
        {
          id: 2,
          img1: "img3A.jpeg",
          img2: "img3B.jpeg",
          title: "Drought Shrinks California's Shasta Lake",
          description: "hasta Lake is California's largest reservoir and third largest body of water, a key water source for Central Valley agriculture. But drought has been depleting the lake. Between the times of the two images, Shasta's water level dropped 107 feet (33 meters). Its water storage decreased to about 40% of capacity and about half of the historical average for the time of year shown. The tan fringe around the water in the 2021 image is a “bathtub ring” lakebed that the falling water level exposed."
        },
        {
          id: 3,
          img1: "img4A.jpeg", // 4A is wrong and need to change it
          img2: "img4B.jpeg",
          title: "Flooding in Mali's Delta",
          description: "In summer 2020, exceptionally heavy rains in the Guinea Highlands of West Africa greatly intensified seasonal floods on the Niger River and in central Mali's vast inland delta, which had once been a lake bottom. According to Mali’s National Directorate of Water Resources, peak water levels tied those of 2018, which were the highest since 1969. The October image shows the delta flooded. Standing water appears black. Many areas appear green because bourgou grass, rice, and other plants grew in the shallow waters. For comparison, the May image shows the dry landscape before the rains"
        },
        {
          id: 4,
          img1: "img5A.jpeg",
          img2: "img5B.jpeg",
          title: "German Mines Transform into Lakes",
          description: "Central Germany was one of the world's top producers of lignite (brown coal). But the rise of alternate energy sources resulted in the closing of most of the pits where lignite was mined, and at least 140 were reclaimed as lakes. These false-color images show the conversions over the last three decades near the city of Leipzig. Vegetation appears red, water is dark blue or black, and urban areas are tan or gray. Lake Geiseltal (large lake at left of the 2020 image), which has a vineyard growing on its slopes, is Germany's largest artificial lake. Plans call for flooding about 20 more mines south of Leipzig, creating a network of waterways stretching over 120 miles (200 kilometers)."
        },
        {
          id: 5,
          img1: "img6A.jpeg",
          img2: "img6B.jpeg",
          title: "Flooding Near Sydney, Australia",
          description: "The 2021 image shows flooding in the Hawkesbury-Nepean River system, along the western edge of Sydney, Australia, where the water rose to its highest crest since 1961. At least 40,000 people were evacuated and several died across New South Wales. Farmers suffered significant crop and livestock losses. Heavy rain had fallen for several days in late summer, and choke points downstream forced the river water to pile up in what authorities called a \"bathtub effect.\""
        },
        {
          id: 6,
          img1: "img7A.jpeg",
          img2: "img7B.jpeg",
          title: "Fast Change in Great Lakes Ice",
          description: "Great Lakes ice cover has declined about 5% each decade since the early 1970s. In keeping with that trend, winter 2020-21 was generally a low-ice season, except for a short period in February, when a brief influx of frigid Arctic air froze nearly half the surface of the lakes. The February image shows the lakes near the peak of the icy blip. The March image shows the scene just 11 days later, when only 15% of the surface was frozen."
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
