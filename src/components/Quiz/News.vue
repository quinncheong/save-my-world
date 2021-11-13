<template>
  <!-- header -->
  <div class="news-change-wrapper">
    <h5 class="mb-3" style="text-align: left">
      <strong>Overview: Weather, Global Warming and Climate Change</strong>
    </h5>
    <div class="card bg-transparent text-white">
      <img
        class="card-img"
        src="https://climate.nasa.gov/system/content_pages/main_images/1321_cc-vs-gw-vs-wx-768px.jpg"
        alt="Card image"
      />
      <p style="font-weight: light">
        “Climate change” and “global warming” are often used interchangeably but
        have distinct meanings. Similarly, the terms "weather" and "climate" are
        sometimes confused, though they refer to events with broadly different
        spatial- and timescales.
      </p>
    </div>
    <div class="row">
      <div 
        :key="index"
        v-for="(srcset, index) of sources"
        class="col-md-4">
        <div class="card my-2 bg-transparent border-light">
          <p class="border-bottom text-center" style="color: yellow">{{ srcset.title }}</p>
          <div class="card-body">
            <p class="card-text text-center">
              {{ srcset.text }}
            </p>
            <p class="mb-1 text-center">
              <a
                class="buttonText text-success badge border py-1"
                href="https://www.nature.com/articles/d41586-021-02990-w"
                >{{ srcset.buttonText }}</a
              >
            </p>
          </div>
        </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>

export default {
  name: "News",
  components: {},
  data() {
    return {
      sources: [
        {
          title: "Climate Change",
          text: "Contemporary climate change includes both global warming caused by humans and its impacts on Earth's weather patterns.",
          buttonText: "Click for more info"
        },
        {
          title: "Greenhouse Gases",
          text: "The main gases responsible for the greenhouse effect include carbon dioxide, methane, nitrous oxide, water vapor and fluorinated gases.",
          buttonText: "Click for more info"
        },
        {
          title: "Ways to contribute",
          text: "Foster innovation and resilient infrastructure, creating communities and cities able to produce and consume sustainably.",
          buttonText: "Click for more info"
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  p {
    text-align: left;
    font-size: 15px;
    padding: 10px;
  }
</style>
