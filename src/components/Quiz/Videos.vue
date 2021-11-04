<template>
    <!-- video -->
    <div class="image-change-wrapper">
        <h4><strong>Video Gallery</strong></h4>
        <p style="font-size: 15px"><i>Watch these videos to better understand about Climate Change</i></p>
        <div class="row">
            <div class="col-lg-6 my-2">
                <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dcBXmj1nMTQ"
                        allowfullscreen></iframe>
                </div>
            </div>

            <!-- Grid column -->
            <div class="col-lg-6 my-2">
                <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/0Puv0Pss33M"
                        allowfullscreen></iframe>
                </div>
            </div>

            <!-- Grid column -->
            <div class="col-lg-6 my-2">
                <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/aNX__544IO0"
                        allowfullscreen></iframe>
                </div>
            </div>

            <!-- Grid column -->
            <div class="col-lg-6 my-2">
                <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/SN5-DnOHQmE"
                        allowfullscreen></iframe>
                </div>
            </div>

            <!-- Grid column -->
            <div class="col-lg-6 my-2">
                <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/G4H1N_yXBiA"
                        allowfullscreen></iframe>
                </div>
            </div>

            <!-- Grid column -->
            <div class="col-lg-6 my-2">
                <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fu5lwMissg0"
                        allowfullscreen></iframe>
                </div>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
// import Campaign from "./Campaign.vue";

export default {
  name: "Video",
  components: {
  },
  data() {
    return {

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

    // // display 70% width on extra large screen sizes
    @media screen and (min-width: 1200px) {
    .image-change-wrapper {
        width: 60%;
    }
    }
</style>
