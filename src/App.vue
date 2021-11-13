<template>
  <div class="app-wrapper">
    <router-view v-if="currentRoute === '/'" />
    <div v-else>
      <Navbar />
      <!-- <Navbar1 /> -->
      <div class="app-content-wrapper">
        <router-view />
      </div>
    </div>
    <Footer />
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
// import Navbar1 from "@/Layout/Navbar1.vue";
import Footer from "@/Layout/Footer.vue";
// import Vue from vue;
// import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
// Vue.use(DropDownListPlugin)

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat");
// CSS reset
html {
  box-sizing: border-box;
  font-size: $font-size-primary;
  min-height: 100vh;
  // min-width: 98vw;
  @extend %background-overlay;
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

// Removing the default app link colors
a {
  color: var(--dark);
  text-decoration: none;
}

// CSS of the app
#app {
  font-family: "Montserrat";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $font-color-primary;

  // background-color: $bg-color-primary; //background colour of the app
  background-color: $bg-color-primary; //background colour of the app
}

.app-wrapper {
  overflow-x: hidden;
}

.app-content-wrapper {
  min-height: 100vh;
  padding: 0.2rem;
  @extend %background-overlay;
}

// small screens place some padding
@media screen and (min-width: 468px) {
  .app-content-wrapper {
    padding: 0.5rem;
  }
}

@media screen and (min-width: 768px) {
  .app-content-wrapper {
    padding: 1rem;
  }
}
  
</style>
