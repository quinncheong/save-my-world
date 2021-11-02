<template>
  <div class="imageCarousel py-4">
    <div class="row">
      <div class="col-12">
        <div class="row" style="text-align: left">
            <div class="col">
                <span class="border-end px-2"><strong>Global Climate Change</strong></span>
                <span class="px-2"><i>Vital signs of the Planet</i></span>
            </div>
        </div>
        <br>
        <div class="card">
            <img class="card-img-top" src="../../assets/imagesChanges/img1A.jpeg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">
                    <strong>Deforestation in Papua, Indonesia</strong>
                </h5>
                <p class="card-subtitle text-secondary">
                    BEFORE AND AFTER
                </p>
                <p class="card-text">The 2019 image shows an area of Papua (also known as Western New Guinea) where the forest was cleared between 2011 and 2016, reportedly to make way for plantation agriculture.</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "imageCard",
  components: {
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.community {
  display: inline-flex;
  flex-direction: column;
}

.card{
    width: 18rem; 
    color: black; 
    text-align: left;
    .card-title{
        font-size: 25px
    }
    .card-subtitle{
        font-size: 20px
    }
    .card-text{
        font-size: 15px
    }
}

</style>
