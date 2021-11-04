<template>
    <div class="bg-transparent">
      <div class="container">
        <div class="card-body">
          <h6 class="class-title">{{ image.title }}</h6>
          <p class="card-subtitle mb-2 my-1"><i>BEFORE AND AFTER</i></p>
          <p class="card-text">{{ image.description }}</p>
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
    border-block: 1px solid white;
  }
</style>