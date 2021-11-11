<template>
  <div class="container my-2">
    <div class="card bg-transparent">
      <!-- <div class="img-container"></div> -->
      <div class="card-content">
        <!-- <h3>BEFORE AND AFTER</h3> -->
        <h4>{{ image.title }}</h4>
        <h5>{{ image.timeline }}</h5>
        <p class="excerpt">{{ image.description }}</p>
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
  .card {
    max-width: 800px;
    box-shadow: 2px 2px 5px #9E9E9E, -1px -1px 5px #9E9E9E;
    border-radius: 3px;
    display: grid;
    grid-template-column: repeat(5, 1fr);
  }
  .card .img-container {
    width: 230px;
    height: 100%;
    grid-column: 2;
    background-color: #c1b7b4;
    background-image: url('https://www.dropbox.com/s/7d5qt5wb2xpqeww/city-street.jpg?raw=1');
    background-size: cover;
    background-position: center center;
  }
  .card-content {
    grid-column: 3 / 5;
    padding: 10px 30px;
    border-left: 1px solid #ccc;
  }

  h4 {
    margin-top: 10px;
    text-transform: uppercase;
    margin-bottom: 0;
    color: yellow;
    font-size: 20px;
    text-align: left;
    font-weight: 900;

  }

  h5{
    margin-top: 5px;
    text-transform: uppercase;
    margin-bottom: 0;
    color: lightgrey;
    font-size: 14px;
    text-align: left;
    font-weight: 900;
  }

  p{
    margin-top: 5px;
    margin-bottom: 0;
    color: lightgrey;
    font-size: 12px;
    text-align: left;
  }

  .card-content .author {
    border-top: 1px solid #cdcdcd;
    font-weight: 700;
    margin-top: 25px;
    padding: 25px 0 10px 0;
    color: #555;
  }

  @media only screen and (max-width:600px) {
    .card {
      display: block;
    }
    .card .img-container {
      height: 250px;
      width: 100%;
    }
    .card-content {
      border: 0;
      border-top: 1px solid #ccc;
    }
  }
</style>
