<template>
  <div class="bg-transparent">
      <div class="container">
        <div v-if="nothing">
          <h6 class="class-title my-1" style="color: yellow"><strong>{{title}}</strong></h6>
          <p class="card-text" style="font-size: 15px">{{description}}</p>
        </div>
        <div v-else class="card-body">
          <h6 class="class-title my-1" style="color: yellow"><strong>{{ image.title }}</strong></h6>
          <p class="card-text" style="font-size: 15px">{{ image.description }}</p>
        </div>

      </div>
    </div>
</template>

<script>
import { createElementBlock } from '@vue/runtime-core';
export default {
    name: 'ImageSliderBody',
    props: ["image"],
    data() {
        return {
            //
            title: "Deforestation in Papua, Indonesia",
            description: "The 2019 image shows an area of Papua (also known as Western New Guinea) where the forest was cleared between 2011 and 2016, reportedly to make way for plantation agriculture"
        }
    },
    methods:{
      
    }
    
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
