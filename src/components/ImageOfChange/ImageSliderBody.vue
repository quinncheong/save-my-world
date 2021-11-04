<template>
    <div class="bg-transparent my-1">
      <div class="container">
        <div class="card-body">
          <h6 class="class-title"><strong>{{ image.title }}</strong></h6>
          <!-- <p class="card-subtitle mb-2 my-1"><i>BEFORE AND AFTER</i></p> -->
          <p class="card-text" style="font-size: 20px">{{ image.description }}</p>
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
            title: "aaa",
            description: "bb"
        }
    },
    
}
</script>

<style lang="scss" scoped>
  .card-body{
    text-align: left;
  }
</style>
