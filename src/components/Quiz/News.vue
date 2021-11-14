<template>
  <!-- header -->
  <div class="news-change-wrapper">
    <h5 class="mb-3 text-center">
      <strong>Overview: Weather, Global Warming and Climate Change</strong>
    </h5>
    <img
      class="card-img"
      src="https://climate.nasa.gov/system/content_pages/main_images/1321_cc-vs-gw-vs-wx-768px.jpg"
      alt="Card image"
    />
    <p class="news-header-text" style="font-weight: light">
      “Climate change” and “global warming” are often used interchangeably but
      have distinct meanings. Similarly, the terms "weather" and "climate" are
      sometimes confused, though they refer to events with broadly different
      spatial- and timescales.
    </p>
    <div class="news-cards-wrapper">
      <div
        :key="index"
        :style="{color: srcset.color}"
        v-for="(srcset, index) of sources"
        class="col"
      >
        <div class="news-card text-center">
           
          <p class="border-bottom news-card-title" style="color: #5A716A">

          <!-- <p class="border-bottom news-card-title"> -->
            {{ srcset.title }}
             <font-awesome-icon :icon="srcset.icon" size="lg"></font-awesome-icon>
          </p>

          <p class="news-card-text">
            {{ srcset.text }}
          </p>
          <p class="mb-2 badge border btn-wrap">
            <!-- <a
                    class="buttonText text-success badge border py-1 btn-wrap"
                    href="https://www.nature.com/articles/d41586-021-02990-w"
                    >{{ srcset.buttonText }}</a
                  > -->
            <a
              class="buttonText"
              href="https://www.nature.com/articles/d41586-021-02990-w"
              >{{ srcset.buttonText }}</a
            >
          </p>
        </div>
      </div>
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
          buttonText: "Click for more info",
          icon: "cloud-sun-rain",
          color: 'white'

        },
        {
          title: "Greenhouse Gases",
          text: "The main gases responsible for the greenhouse effect include carbon dioxide, methane, nitrous oxide, water vapor and fluorinated gases.",
          buttonText: "Click for more info",
          icon: "wind", 
          color: 'white'
        },
        {
          title: "Ways to Contribute",
          text: "Foster innovation and resilient infrastructure, creating communities and cities able to produce and consume sustainably.",
          buttonText: "Click for more info",
          icon: "hands-helping", 
          color: 'white'
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.news-change-wrapper {
  font-size: $font-size-small;
  @extend %vertical-flex;

  .news-header-text {
    margin: 1rem 0;
  }

  .news-cards-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 0.5rem;

    .news-card {
      @extend %bg-card-rounded;
      @extend %vertical-flex;
      justify-content: space-between;
      padding: 0.5rem;
      background-color:#6dc0d5;
      // background-color: #8ABAD3FF;
      height: 100%;

      .news-card-title {

      }

      .news-card-text {
        margin: 0.8rem 0;
      }
    }
  }
}

.btn-wrap {
  display: inline-block;
  text-align: center;
  margin: 0 auto;
  font-size: 12px !important;
  color: rgb(29, 108, 128);
}

@media screen and (min-width: 558px) {
  .news-change-wrapper {
    .news-cards-wrapper {
      gap: 1rem;
    }
  }
}
</style>
