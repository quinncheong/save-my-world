<template>
  <div>
    <Navbar />
    <div class="app-content-wrapper">
      <router-view />
    </div>
  </div>

  <!--Wei Ting's edit to add the background pixels-->

  <!-- <section class='wrapper'>
    <div id="stars1"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
  </section> -->

  
</template>

<script>
import Navbar from "@/Layout/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
// CSS reset
html {
  box-sizing: border-box;
  font-size: $font-size-primary;
  min-height: 100vh;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

// CSS of the app
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $font-color-primary;
  
  // background-color: $bg-color-primary; //background colour of the app 
}

.app-content-wrapper {
  min-height: 100vh;
  padding: 1rem;
  @extend %background-overlay;
}

// #stars1{
//   width: 1px; 
//   height: 1px;
//   background: transparent;
//   animation: animStar 50s linear infinite;
//   box-shadow: $stars1Var; //the particles not working 
//   } 

// #stars1:after{
//   content: ''; 
//   position:absolute;
//   top: 2000px;
//   width: 1px;
//   height: 1px;
//   background: transparent;  
//   box-shadow: $stars2Var; //the particles not working 
//   } 

// #stars2{
//   width: 2px;
//   height: 2px; 
//   background: transparent;
//   animation: animStar 100s linear infinite;
//   box-shadow: $stars3Var;
// }

// #star2:after{
//   content: ''; 
//   position:absolute;
//   top: 2000px;
//   width: 1px;
//   height: 1px;
//   background: transparent;  
//   box-shadow: $stars4Var; //the particles not working 
// }
</style>
