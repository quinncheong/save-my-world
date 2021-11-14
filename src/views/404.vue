<template>
  <!-- <div class='top-space'></div> -->
  <div class="fourofour-wrapper">
    <div class="svg-img">
      <img
        src="https://assets.codepen.io/1538474/astronaut.svg"
        class="astronaut img-fluid"
      />
    </div>

    <div class="text-wrap">
      <!-- <p class="title"><strong style="font-size: 100px">404</strong><br>Oh no!!</p> -->

      <p class="title">404</p>
      <p>Oh no!!</p>

      <p class="subtitle">
        You’re either misspelling the URL <br />
        or requesting a page that's no longer here.
      </p>

      <a class="btn-back badge border button-wrap" @click="handleClick" href="#"
        >Fly Back Home</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  methods: {
    handleClick() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Nunito:400,600,700");

// mixins
@mixin breakpoint($point) {
    @if $point==mobile {
        @media (max-width: 480px) and (min-width: 320px) {
            @content ;
        }
    }
}

.title {
  color: white;
  font-weight: 800;
  // font-size: 3vmin;
  font-size: 100px;
}

.subtitle {
  color: white;
  // font-weight: 400;
  font-size: 2vmin;
  // font-size: 2vw;
  margin-bottom: 10px;
}

.astronaut {
  // position: relative;
  // position: absolute;
  // top: 100px;
  // left: 150px;
  // left: -200px;
  // right: 200px;
  // transform: scaleX(-1);
  // transform: scaleY(-1);
  transform: translate(100px);
  top: 100px;
  margin-bottom: 0;
  transform: rotate(-70deg);
  height: 120px;
  animation: floating 3s infinite ease-in-out;
}

.img {
  width: 100%;
}

.text-wrap {
  // position: absolute;
  // top: 200px;
  // right: 100px;
  margin: 0 20px;
  // position: relative;
}

.fourofour-wrapper {
  display: flex;
  justify-content: center;
}

.svg-img {
  //  position: absolute;
  left: 250px;
}

//max - above the number will become that
//min - below the number will becoime those
@media screen and (min-width: 468px) {
  .title {
    font-size: 10vw;
  }
}

@media screen and (min-width: 768px) {
  .fourofour-wrapper {
    // position: static;
    width: 80%;
    display: flex;
    flex-direction: row;

    .text-wrap {
      margin: 0 auto;

      .title {
        font-size: 10vw;
      }
    }
    // .title {
    //   font-size: 10vw;
    // }
  }

}
@media screen and (min-width: 992px) {
  .title {
    width: 70%;
    color: white;
    font-weight: 800;
    // font-size: 3vmin;
    font-size: 10vw;
  }
}

@media screen and (min-width: 1400px) {
  .title {
    width: 60%;
    font-size: 10vw;
  }
}

</style>
