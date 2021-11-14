<template>
  <div class="container my-2">
    <div class="card bg-transparent">
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
import { createElementBlock } from "@vue/runtime-core";
export default {
  name: "ImageSliderBody",
  props: ["image"],
  data() {
    return {
      //
      title: "Deforestation in Papua, Indonesia",
      description:
        "The 2019 image shows an area of Papua (also known as Western New Guinea) where the forest was cleared between 2011 and 2016, reportedly to make way for plantation agriculture",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 0px;
  padding-right: 0px;
  margin: 0 auto;
}

.card-body {
  text-align: left;

  .card-title {
    line-height: 1.7;
    font-family: "Sora", sans-serif;
  }
}
.card {
  box-shadow: 2px 2px 5px #9e9e9e, -1px -1px 5px #9e9e9e;
}

.card-content {
  padding: 10px 30px;
  border-left: 1px solid #ccc;

  .author {
    border-top: 1px solid #cdcdcd;
    font-weight: 700;
    margin-top: 25px;
    padding: 25px 0 10px 0;
    color: #555;
  }
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

h5 {
  margin-top: 5px;
  text-transform: uppercase;
  margin-bottom: 0;
  color: lightgrey;
  font-size: 14px;
  text-align: left;
  font-weight: 900;
}

p {
  margin-top: 5px;
  margin-bottom: 0;
  color: lightgrey;
  text-align: left;
}

@media screen and (max-width: 576px) {
  .container {
    width: 100%;
    font-size: $variable-font;
    .card-content {
      padding: 10px 10px;
      h4 {
        margin: 0px;
        font-size: $variable-font;
      }
      h5 {
        font-size: $variable-font;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    font-size: $variable-font;
  }
}

// display 70% width on large screen sizes
@media screen and (max-width: 992px) {
  .container {
    width: 100%;
    font-size: $variable-font;
  }
}

// display 70% width on extra large screen sizes
@media screen and (max-width: 1200px) {
  .container {
    width: 100%;
    font-size: $variable-font;
  }
}
</style>
