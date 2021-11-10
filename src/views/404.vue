<template>
  <div class="mars"></div>
  <p class="title"><strong style="font-size: 70px">404</strong><br>Oh no!!</p>
  <p class="subtitle">
    You’re either misspelling the URL <br /> or requesting a page that's no longer here.
  </p>
  <div align="center">
    <a class="btn-back" @click="handleClick" href="#">Fly Back Home</a>
  </div>
  <img src="https://assets.codepen.io/1538474/astronaut.svg" class="astronaut" />
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
$nunito-font: 'Nunito', sans-serif;

// mixins
@mixin breakpoint($point) {
    @if $point==mobile {
        @media (max-width: 480px) and (min-width: 320px) {
            @content ;
        }
    }
}

// keyrames
@keyframes floating {
    from { transform: translateY(0px); }
    65%  { transform: translateY(15px); }
    to   { transform: translateY(-0px); }
}


.title{
  color: white;
  font-family: $nunito-font;
  font-weight: 600;
  text-align: center;
  font-size: 5vmin;
  margin-top: 25vmin;

  @include breakpoint(mobile){
    margin-top: 65vmin;
  }
}

.subtitle{
  color: white;
  font-family: $nunito-font;
  font-weight: 400;
  text-align: center;
  font-size: 3.5vmin;
  margin-top: -1vmin;
  margin-bottom: 5vmin;
}

.btn-back{
  border: 1px solid white;
  color: white;
  height: 5vmin;
  padding: 10px;
  font-size: 20px;
  font-family: $nunito-font;
  text-decoration: none;
	border-radius: 10px;

  &:hover{
    background: white;
    color: #4D007D;
  }

  @include breakpoint(mobile){
    font-size: 3.5vmin;
  }
}

.astronaut{
  position: absolute;
  top: 25vmin;
  left: 8vmin;
  height: 25vmin;
	animation: floating 3s infinite ease-in-out;

  @include breakpoint(mobile){
    top: 2vmin;
  }
}

</style>
