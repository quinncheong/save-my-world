<template>
  <!-- video -->
  <div class="video">
    <h4><strong>Video Gallery</strong></h4>
    <img class="video-img my-2" src="../../assets/img/videos.webp" />
    <!-- <h1><font-awesome-icon :icon="['fas', 'video']" /></h1> -->
    <p class="mb-3" style="font-size: 15px">
      <i>Watch these videos to better understand about Climate Change </i>
    </p>

    <ul class="cards">
      <li class="col" :key="index" v-for="(srcset, index) of sources">
        <div class="card-body-wrapper">
          <div class="card-video">
            <iframe
              width="100%"
              height="100%"
              :src="srcset.link"
              allowfullscreen
            ></iframe>
          </div>
          <div class="card-content">
            <h6 class="card-title">{{ srcset.title }}</h6>
            <p class="card-text">{{ srcset.text }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Video",
  components: {},
  data() {
    return {
      sources: [
        {
          link: "https://www.youtube.com/embed/G4H1N_yXBiA",
          title: "Cause and Effect of Climate Change",
          text: "What causes climate change (also known as global warming)? And what are the effects of climate change? Learn the human impact and consequences of climate change for the environment, and our lives.",
        },
        {
          link: "https://www.youtube.com/embed/dcBXmj1nMTQ",
          title: "What is Climate Change?",
          text: "The hard facts about global warming - a defining issue of our time. Climate change is happening now, and even world leaders meeting for climate talks at this year’s Cop25 know we aren’t doing enough to stop it.",
        },
        {
          link: "https://www.youtube.com/embed/0Puv0Pss33M",
          title: "How to Save Our Planet",
          text: "It’s simple. Sir David Attenborough explains how humans can take charge of our future and save our planet.",
        },
        {
          link: "https://www.youtube.com/embed/aNX__544IO0",
          title: "Queen Elizabeth: Time for action on climate change",
          text: 'Britain\'s Queen Elizabeth told the United Nations climate change summit on Monday that "the time for words has now moved to the time for action", as she urged world leaders to think of future generations when negotiating a deal to limit global warming',
        },
        {
          link: "https://www.youtube.com/embed/SN5-DnOHQmE",
          title: "What Is the Greenhouse Effect?",
          text: "Earth is a comfortable place for living things. It’s just the right temperatures for plants and animals – including humans – to thrive. Why is Earth so special?",
        },
        {
          link: "https://www.youtube.com/embed/fu5lwMissg0",
          title:
            "How melting Arctic ice could cause uncontrollable climate change",
          text: "Arctic scientists have reported that the speed at which the northern ice cap is melting risks triggering 19 climate tipping points, with disastrous consequences.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.video {
  @extend %vertical-flex;
  font-size: $font-size-small;

  .video-img {
    width: 150px;
    height: 150px;
    animation: float 4s ease-in-out infinite;
    pointer-events: none;
  }
}

.cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  list-style: none;
  gap: 1rem;

  .card-body-wrapper {
    @extend %bg-card-rounded;
    @extend %vertical-flex;
    justify-content: space-between;
    background: none;
    height: 100%;
    min-width: 200px;

    .card-video {
      width: 100%;
      min-height: 200px;
    }

    .card-content {
      @extend %vertical-flex;
      justify-content: flex-start;
      height: 100%;
      width: 100%;
      padding: 0.5rem;
      background: linear-gradient(
        to bottom right,
        rgba(80, 167, 194, 0.9),
        rgba(144, 243, 199, 0.9)
      );

      .card-title {
        color: #ffffff;
        font-weight: bold;
        text-transform: capitalize;
        marign-bottom: 0.5rem;
      }

      .card-text {
        color: #ffffff;
        text-align: justify;
      }
    }

  }
}

@media screen and (min-width: 568px) {
  .cards .card-body-wrapper .card-content {
    text-align: center;
  }
}

@media screen and (min-width: 768px) {
}

@media screen and (min-width: 992px) {
}

@media screen and (min-width: 1400px) {
}
</style>
