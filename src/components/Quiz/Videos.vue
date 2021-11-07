<template>
  <!-- video -->
  <!-- <div class="video-wrapper">
    <h4><strong>Video Gallery</strong></h4>
    <p style="font-size: 15px">
      <i>Watch these videos to better understand about Climate Change</i>
    </p>
    <div class="row my-2">
      <div class="col-md-6 col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe width="300" height="150"
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/dcBXmj1nMTQ"
            allowfullscreen
          ></iframe>
        </div>
      </div> -->

      <!-- Grid column -->
      <!-- <div class="col-md-6 col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe width="300" height="150"
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/0Puv0Pss33M"
            allowfullscreen
          ></iframe>
        </div>
      </div> -->

      <!-- Grid column -->
      <!-- <div class="col-md-6 col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe width="300" height="150"
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/aNX__544IO0"
            allowfullscreen
          ></iframe>
        </div>
      </div> -->

      <!-- Grid column -->
      <!-- <div class="col-md-6 col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe width="300" height="150"
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/SN5-DnOHQmE"
            allowfullscreen
          ></iframe>
        </div>
      </div> -->

      <!-- Grid column -->
      <!-- <div class="col-md-6 col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe width="300" height="150"
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/G4H1N_yXBiA"
            allowfullscreen
          ></iframe>
        </div>
      </div> -->

      <!-- Grid column -->
      <!-- <div class="col-md-6 col-sm-6">
        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe width="300" height="150"
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/fu5lwMissg0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div> -->

  <!-- something new -->
  <h4><strong>Video Gallery</strong></h4>
    <p style="font-size: 15px">
      <i>Watch these videos to better understand about Climate Change</i>
    </p>
  <div class="main">
    <ul class="cards">
      <li class="cards_item">
        <div class="card bg-transparent">
          <div class="card_image"><iframe width="100%" height="100%"
              src="https://www.youtube.com/embed/G4H1N_yXBiA"
              allowfullscreen
            ></iframe></div>
          <div class="card_content">
            <h6 class="card_title">Cause and Effect of Climate Change</h6>
            <p class="card_text">What causes climate change (also known as global warming)? And what are the effects of climate change? Learn the human impact and consequences of climate change for the environment, and our lives.</p>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card bg-transparent">
          <div class="card_image"><iframe width="100%" height="100%"
              src="https://www.youtube.com/embed/dcBXmj1nMTQ"
              allowfullscreen
            ></iframe></div>
          <div class="card_content">
            <h6 class="card_title">What is Climate Change?</h6>
            <p class="card_text">The hard facts about global warming - a defining issue of our time. Climate change is happening now, and even world leaders meeting for climate talks at this year’s Cop25 know we aren’t doing enough to stop it.</p>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card bg-transparent">
          <div class="card_image"><iframe width="100%" height="100%"
              src="https://www.youtube.com/embed/0Puv0Pss33M"
              allowfullscreen
            ></iframe></div>
          <div class="card_content">
            <h6 class="card_title">How to Save Our Planet</h6>
            <p class="card_text">It’s simple. Sir David Attenborough explains how humans can take charge of our future and save our planet.</p>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card bg-transparent">
          <div class="card_image"><iframe width="100%" height="100%"
              src="https://www.youtube.com/embed/aNX__544IO0"
              allowfullscreen
            ></iframe></div>
          <div class="card_content">
            <h6 class="card_title">Queen Elizabeth: Time for action on climate change</h6>
            <p class="card_text">Britain's Queen Elizabeth told the United Nations climate change summit on Monday that "the time for words has now moved to the time for action", as she urged world leaders to think of future generations when negotiating a deal to limit global warming</p>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card bg-transparent">
          <div class="card_image"><iframe width="100%" height="100%"
              src="https://www.youtube.com/embed/SN5-DnOHQmE"
              allowfullscreen
            ></iframe></div>
          <div class="card_content">
            <h6 class="card_title">What Is the Greenhouse Effect?</h6>
            <p class="card_text">Earth is a comfortable place for living things. It’s just the right temperatures for plants and animals – including humans – to thrive. Why is Earth so special?</p>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card bg-transparent">
          <div class="card_image"><iframe width="100%" height="100%"
              src="https://www.youtube.com/embed/fu5lwMissg0"
              allowfullscreen
            ></iframe></div>
          <div class="card_content">
            <h6 class="card_title">How melting Arctic ice could cause uncontrollable climate change</h6>
            <p class="card_text">Arctic scientists have reported that the speed at which the northern ice cap is melting risks triggering 19 climate tipping points, with disastrous consequences.</p>
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
    return {};
  },
};
</script>

<style lang="scss" scoped>

  @keyframes appear {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

  .main{
    animation: appear 5s ease-in;
    max-width: 1200px;
    margin: 0 auto;
    line-height: 1.7;
    font-family: "Sora", sans-serif;
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

  .cards_item {
    display: flex;
    padding: 1rem;
    transition: all 0.3s ease;
      
  }

  .cards_item:hover {
        box-shadow: none;
        transform: translateY(15px);
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
