<template>
  <div class="image-change-wrapper">
    <!-- header -->
    <h2 class="chart-title mb-3">Images of the World</h2>
    <p class="chart-details text-center w-75 mb-3">
      The best way to see Climate change in effect, is if we can see how the Earth is changing. Throughout the years, many places on earth have changed drastically - and not for the better.
    </p>
    <p class="chart-select mb-3 fst-italic">Select an image and see how different the world has become</p>
    <image-of-change />
    <br />
    <div class="jumbotron jumbotron-fluid bg-secondary">
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
    </div>
    <!-- left section things -->
  </div>
</template>

<script>
import ImageOfChange from "../components/ImageOfChange/ImageOfChange.vue";

export default {
  name: "imageCarousel",
  components: {
    ImageOfChange,
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
.image-change-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-between;
  font-size: $variable-font;
}

.jumbotron {
  text-align: left;
  padding-bottom: 10px;
}

// display 70% width on desktop
@media (min-width: 768px) {
  .image-change-wrapper {
    width: 90%;
  }
}

// display 70% width on large screen sizes
@media (min-width: 992px) {
  .image-change-wrapper {
    width: 70%;
  }
}

// display 70% width on extra large screen sizes
@media (min-width: 1200px) {
  .image-change-wrapper {
    width: 80%;
  }
}
</style>
