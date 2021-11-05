<template>
  <div class="home-page-wrapper">
    <!--top header-->
    <header class="header">
      <div class="links text-white">
        <template :key="route.path" v-for="(route, index) in routes">
          <router-link v-if="route.meta.visible" :to="route.path.toLowerCase()">
            {{ route.name }}
          </router-link>
        </template>
      </div>

      <div class="header-middle-text d-flex">
        <h4 class="text-white">Save My World,</h4>
        <h4 class="text-white">Together</h4>
      </div>
      <!-- SVG birds animation -->
      <animated-birds />

      <a href="#main" class="header-arrow">
        <span></span>
      </a>
    </header>

    <about id="main" />

    <!-- Block about what the site is -->
      <!-- <div class="top-header-wrapper">
        <h1 class="text-white">
          You have the power to <span id="savemyworld">#SaveOurWorld</span>
        </h1>
      </div> -->
    <!-- <div class="row">
      <div class="col-1"></div>
      <div class="col-lg-4 text-white alignment-left my-3">
        Climate change will affect all of us, whether directly or indirectly. We
        all have a stake in helping to reduce our emissions and in preparing for
        the effects of climate change.
      </div>
    </div> -->

    <!--How we can play our part-->
    <future />

    <!-- <three-rs /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// Components
import About from "@/components/Home/About.vue";
import ThreeRs from "@/components/Home/ThreeRs.vue";
import Future from "@/components/Home/Future.vue";
import AnimatedBirds from "@/components/Home/AnimatedBirds.vue";

import Globe from "@/assets/img/globe.png";
import Guide from "@/assets/img/guidebackgroundimg.jpg";
import Recycle from "@/assets/img/recyclingbin.png";
import GlobeGuide from "@/assets/img/planetearth.png";
import Clothes from "@/assets/img/clothes.png";
import LandingPage from "@/assets/img/LandingPage.jpeg";

export default {
  name: "Home",
  components: {
    About,
    ThreeRs,
    Future,
    AnimatedBirds,
  },
  data() {
    return {
      Globe,
      Guide,
      Recycle,
      GlobeGuide,
      Clothes,
      LandingPage,
    };
  },
  computed: {
    routes() {
      console.log(this.$router.options.routes);
      return this.$router.options.routes;
    },
  },
};
</script>

<style lang="scss">
.home-page-wrapper {
  // min-height: 100vh;
  min-width: 100vw;
  font-size: $variable-font;

  .header {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    max-height: 100vh;
    padding: 1rem;
    background-image: url("~@/assets/img/LandingPage3.jpeg");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    position: relative;

    .header-middle-text {
      margin-top: 9rem;
      width: 70%;
      flex-direction: column;
      align-items: flex-start;
    }

    .links {
      display: flex;
      width: 90%;
      justify-content: space-around;
    }

    .header-arrow {
      margin-top: auto;
      cursor: pointer;
      animation: 2.5s infinite alternate bouncer;

      span {
        display: block;
        width: 32px;
        height: 32px;
        border-right: 2px solid;
        border-bottom: 2px solid;
        border-color: #fefefe;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }

  .hero {
    position: relative;
    z-index: 1;

    .bg-image-holder {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: url("~@/assets/img/LandingPage3.jpeg") center center;
      opacity: 0.7;
      width: 100%;
      height: 100%;
      background-attachment: fixed;
    }

    .top-header-wrapper {
      position: absolute;
      width: 80%;
      top: 50%;
      left: 50%;
      z-index: 1;
      transform: translate(-50%, -50%);
    }
  }
}

// Accounting for the different breakpoints
@media screen and (min-width: 768px) {
  .home-page-wrapper {
    width: 80%;
  }
}

@media screen and (min-width: 992px) {
  .home-page-wrapper {
    width: 70%;
  }
}

@media screen and (min-width: 1400px) {
  .home-page-wrapper {
    width: 60%;
  }
}

.alignment-left {
  text-align: left;
}

#savemyworld {
  color: yellow;
}

// :root {
//   --primary: #0d6efd;
//   --dark: #21252f;
//   // --body: #888;
//   --white: #ffffff;
//   // --box-shadow: 0 8px 22px rgba(0,0,0,0.1);
// }

a {
  color: var(--dark);
  text-decoration: none;
}

.btn {
  padding: 14px 18px;
  border-width: 2px;
  border-radius: 0;
}

.hero::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  // background-color: rgba(21, 20, 51, 0.8);
  z-index: -1;
}

.col-img {
  // background-image: url(../img/cover2.jpg);
  background-position: center;
  background-size: cover;
  min-height: 500px;
}

form input.form-control {
  height: 56px;
}

form .form-control {
  border: transparent;
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.02);
}

//for the vertical line

.vl {
  border-left: 3px solid green;
  height: auto;
}

//for the nav tab
.main {
  box-sizing: border-box;
  width: auto;
  height: auto;
  position: relative;
  display: flex;

  li.header-top {
    width: 100%;
    display: inline-block;
    background-color: rgb(17, 16, 16);
  }
}

.content {
  background: rgb(17, 16, 16);
  color: white;
  position: absolute;
  left: 0;
  display: none;
  padding: 30px;
  width: 100%;
}

.content > p {
  font-size: 1em;
  font-weight: 300;
  margin: 10px;
}

.main [id^="label"]:checked ~ .content {
  display: block;
}

.main input[type="radio"] {
  display: none;
}

.main label {
  padding: 20px 30px;
}

.main[id^="label"]:checked + label {
  background-color: black;
  color: green;
}

.heading {
  font-size: 3.5vw;
  text-shadow: 4px 5px 5px #3f7fbf;
  // position: absolute;
  // text-align: center;
  // mix-blend-mode: screen;
  animation: fadeIn 2.5s linear forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

// .animate{
//   white-space: nowrap;
//   overflow: hidden;
//   border-right: solid 3px rdba(0, 255, 0 , 0.75);
//   font-size: 28px;
//   color: rgba(255, 255, 255, 0.7);
//   animation: animated-text 4s steps(29,end) 1s 1 normal animated-cursor 600ms steps(29,end) infinite;
// }

// @keyframes animated-text {
//   0%{
//     width: 0;
//   }
//   to{
//     width: 472px;
//   }

// }

// @keyframes animated-cursor {
//   from{
//     border-right-color: rgba(0, 255, 0, 0.75);
//   }
//   to{
//     border-right-color: transparent ;
//   }
// }

// .heading::before,
// .heading::after {
//   content: "";
//   position: absolute;
// }

// .heading {
//   font-size: clamp(1rem, 3.3vw + 1rem, 4rem);
// }
// .heading::before {
//   background: teal;
//   animation: typewriter 1s ease;
// }

@keyframes typewriter {
  to {
    left: 100%;
  }
}


.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}
</style>
