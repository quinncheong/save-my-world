<template>
    <!-- header -->
    <h5 class="mb-3" style="text-align: left"><strong>Overview: Weather, Global Warming and Climate Change</strong></h5>
    <div class="row">
        <div class="col-7">
            <div class="card bg-transparent text-white">
                <img class="card-img" src="https://climate.nasa.gov/system/content_pages/main_images/1321_cc-vs-gw-vs-wx-768px.jpg" alt="Card image">
                <p style="font-weight: light">“Climate change” and “global warming” are often used interchangeably but have distinct meanings. Similarly, the terms "weather" and "climate" are sometimes confused, though they refer to events with broadly different spatial- and timescales.</p>
            </div>
        </div>
        <div class="col-5">
            <div class="list-group">
                <div class="list-group-item bg-transparent text-white border-dark list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between ">
                        <h6 class="mb-1 text-center">Climate Change</h6>
                    </div>
                    <p class="mb-1 text-center"><a class="text-success" href="https://www.nature.com/articles/d41586-021-02990-w">Click on this link for more information</a></p>
                    <!-- <small>Donec id elit non mi porta .</small> -->
                </div>
            </div>
            <div class="list-group my-1">
                <div class="list-group-item bg-transparent text-white border-dark list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between ">
                        <h6 class="mb-1 text-center">Ways to contribute</h6>
                    </div>
                    <p class="mb-1 text-center"><a class="text-success" href="https://www.nature.com/articles/d41586-021-02990-w">Click on this link for more information</a></p>
                    <!-- <small>Donec id elit non mi porta .</small> -->
                </div>
            </div>
            <div class="list-group my-1">
                <div class="list-group-item bg-transparent text-white border-dark list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between ">
                        <h6 class="mb-1 text-center">Greenhouse Gases</h6>
                    </div>
                    <p class="mb-1 text-center"><a class="text-success" href="https://www.nationalgeographic.com/environment/article/greenhouse-gases">Click on this link for more information</a></p>
                    <!-- <small>Donec id elit non mi porta .</small> -->
                </div>
            </div>
        </div>
    </div>
    <hr>
</template>

<script>
// import Campaign from "./Campaign.vue";

export default {
  name: "News",
  components: {
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
    p{
        text-align: left;
        font-size: 15px;
        padding: 10px;
    }
</style>
