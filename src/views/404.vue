<template>
  <div class="fourofour-wrapper">
    <div class="mars"></div>
    <img src="https://assets.codepen.io/1538474/astronaut.svg" class="astronaut" />
    <p class="title"><strong style="font-size: 70px">404</strong><br>Oh no!!</p>
    <p class="subtitle">
      You’re either misspelling the URL <br /> or requesting a page that's no longer here.
    </p>
    <div align="center">
      <a class="btn-back badge border" @click="handleClick" href="#">Fly Back Home</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  methods: {
    handleClick() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700');

// mixins
@mixin breakpoint($point) {
    @if $point==mobile {
        @media (max-width: 480px) and (min-width: 320px) {
            @content ;
        }
    }
}

.title{
  color: white;
  font-weight: 600;
  text-align: center;
  font-size: 5vmin;
  margin-top: 10px;
}

.subtitle{
  color: white;
  font-weight: 400;
  text-align: center;
  font-size: 3vmin;
  // margin-top: -1vmin;
  margin-bottom: 10px;
}

.astronaut{
  position: relative;
  // top: 100px;
  // left: -150px;
  // transform: scaleX(-1);
  // transform: scaleY(-1);
  transform: rotate(-70deg);
  height: 150px;
	animation: floating 3s infinite ease-in-out;
}

</style>
