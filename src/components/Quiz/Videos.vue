<template>
  <!-- video -->
  <h4><strong>Video Gallery</strong></h4>
  <img class="video-img my-2" src="../../assets/img/videos.webp" alt="">
  <!-- <h1><font-awesome-icon :icon="['fas', 'video']" /></h1> -->
    <p style="font-size: 15px">
      <!-- <i class="fas fa-book"></i> -->
      
      <i>Watch these videos to better understand about Climate Change
      </i>
    </p>
  <div class="video">
    <ul class="cards">
      <li 
      :key="index"
      v-for="(srcset, index) of sources"
      class="cards_item"
      >
        <div class="card bg-transparent">
          <div class="card_image"><iframe width="100%" height="100%"
              :src="srcset.link"
              allowfullscreen
            ></iframe></div>
          <div class="card_content">
            <h6 class="card_title">{{ srcset.title }}</h6>
            <p class="card_text">{{ srcset.text }}</p>
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
          text: "What causes climate change (also known as global warming)? And what are the effects of climate change? Learn the human impact and consequences of climate change for the environment, and our lives."
        },
        {
          link: "https://www.youtube.com/embed/dcBXmj1nMTQ",
          title: "What is Climate Change?",
          text: "The hard facts about global warming - a defining issue of our time. Climate change is happening now, and even world leaders meeting for climate talks at this year’s Cop25 know we aren’t doing enough to stop it."
        },
        {
          link: "https://www.youtube.com/embed/0Puv0Pss33M",
          title: "How to Save Our Planet",
          text: "It’s simple. Sir David Attenborough explains how humans can take charge of our future and save our planet."
        },
        {
          link: "https://www.youtube.com/embed/aNX__544IO0",
          title: "Queen Elizabeth: Time for action on climate change",
          text: "Britain's Queen Elizabeth told the United Nations climate change summit on Monday that \"the time for words has now moved to the time for action\", as she urged world leaders to think of future generations when negotiating a deal to limit global warming"
        },
        {
          link: "https://www.youtube.com/embed/SN5-DnOHQmE",
          title: "What Is the Greenhouse Effect?",
          text: "Earth is a comfortable place for living things. It’s just the right temperatures for plants and animals – including humans – to thrive. Why is Earth so special?"
        },
        {
          link: "https://www.youtube.com/embed/fu5lwMissg0",
          title: "How melting Arctic ice could cause uncontrollable climate change",
          text: "Arctic scientists have reported that the speed at which the northern ice cap is melting risks triggering 19 climate tipping points, with disastrous consequences."
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

  .video-img{
    width: 350px;
    height: 300px;
  }

  h1 {
      font-size: 24px;
      font-weight: 400;
      text-align: center;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    
  }


  @media (min-width: 40rem) {
    .cards_item {
      width: 50%;
    }
  }

  @media (min-width: 56rem) {
    .cards_item {
      width: 33.3333%;
    }
  }

  .card {
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .card_content {
    padding: 1rem;
    background: linear-gradient(
      to bottom right,
      rgba(80, 167, 194, 0.9),
      rgba(144, 243, 199, 0.9)
    );
    height: 18rem;
  }

  .card_title {
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin: 0px;
  }

  .card_text {
    padding: 10px;
    color: #ffffff;
    font-size: 0.675rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;    
    font-weight: 400;
    text-align: left;
  }
</style>
