<template>
  <!-- video -->
  <div class="video-wrapper">
    <h4><strong>Video Gallery</strong></h4>
    <p style="font-size: 15px">
      <i>Watch these videos to better understand about Climate Change</i>
    </p>
    <div class="row">
      <div class="col-md-6 my-2">
        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe width="300" height="150"
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/dcBXmj1nMTQ"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!-- Grid column -->
      <div class="col-md-6 my-2">
        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe width="300" height="150"
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/0Puv0Pss33M"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!-- Grid column -->
      <div class="col-md-6 my-2">
        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe width="300" height="150"
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/aNX__544IO0"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!-- Grid column -->
      <div class="col-md-6 my-2">
        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe width="300" height="150"
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/SN5-DnOHQmE"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!-- Grid column -->
      <div class="col-md-6 my-2">
        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe width="300" height="150"
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/G4H1N_yXBiA"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!-- Grid column -->
      <div class="col-md-6 my-2">
        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe width="300" height="150"
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/fu5lwMissg0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
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

  iframe {
    // box-shadow: var(--box-shadow);
    // background-color: var(--white);
    // padding: 25px;
    transition: all 0.35s ease;

    &:hover {
      box-shadow: none;
      transform: translateY(10px);
    }
  }
  @keyframes appear {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  .video-wrapper{
     animation: appear 5s ease-in;
  }
</style>
