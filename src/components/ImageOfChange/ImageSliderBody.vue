<template>
  <div class="bg-transparent">
      <div class="container">
        <div class="card-body">
          <h6 class="class-title my-1" style="color: yellow"><strong>{{ image.title }}</strong></h6>
          <!-- <p class="card-subtitle mb-2 my-1"><i>BEFORE AND AFTER</i></p> -->
          <p class="card-text" style="font-size: 15px">{{ image.description }}</p>
        </div>

      </div>
    </div>
</template>

<script>
export default {
    name: 'ImageSliderBody',
    props: ["image"],
    data() {
        return {
            //
        }
    },
    
}
</script>

<style lang="scss" scoped>
  .card-body{
    text-align: left;

    .card-title{
      line-height: 1.7;
      font-family: "Sora", sans-serif;
    }
  }
</style>
