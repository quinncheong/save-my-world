<template>
  <div class="card-bg col-5 col-sm-3">
    <!-- <img src="@/assets/img/seaIce.png" alt="" /> -->
    <!-- <div v-for='imgs in images' :key = imgs>
        <img :src='imgs.url' alt=""/>
      </div> -->
    <!-- <img :src='src' alt='you failed'> -->

    <!--Correct one-->
    <img :src="require(`@/assets/img/${src}`)" alt="" />

    <!-- <div class="img-wrap">
      <span class="text-hover">
        <img :src="require(`@/assets/img/${src}`)" alt="" />
      </span>
    </div> -->

    <!-- <img :src="require(`@/assets/img/${src}`)" alt="" class="img-wrap" />
    <span class="text-hover"> </span> -->

    <!--correct one-->
    <!-- <p class="card-title">
      {{ name }}
    </p> -->

    <div class="card-title img-wrap">
      {{ name }}
      <span class="text-hover"> {{ information }}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "ChartsCard",
  data() {
    // return{
    //   images: [
    //     {url: "@/assets/img/seaIce.png"},
    //     {url: "@/assets/img/Co2.png"},
    //     {url: "@/assets/img/temp.png"},
    //   ]
    // }
  },
  // props: {
  //   name,
  //   // src,
  // },
  props: ["name", "src", 'information'],
};
</script>

<style lang="scss">
.card-bg {
  @extend %bg-card-rounded;
  background-color: $tertiary-color-opacity;
  display: flex;
  flex-direction: column;
  padding: 1em; //was initally 0.5em
  border: 1px solid white;
  margin-bottom: 7%;


  &:hover {
    background-color: $bg-color-secondary;
    cursor: pointer;
    border: 4px solid white;

  }

  .card-title {
    text-overflow: clip;
    word-wrap: break-word;
    align-self: center;
  }
}

@media screen and (max-width: 300px) {
  .card-bg {
    font-size: 18px;
    width: 100%;
  }
}

.img-wrap {
  position: relative;
  display: inline-block;
}
.img-wrap .text-hover {
  visibility: hidden;
  // width: 150px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;

  width: 130px;
  top: 100%;
  left: 50%;
  margin-left: -60px;
}

.img-wrap:hover .text-hover {
  visibility: visible;

}
</style>
