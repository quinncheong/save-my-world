<template>
  <div class="home-page-wrapper">
    <!--top header-->
    <header class="header">
      <nav class="links text-white" v-if="fullView">
        <template :key="route.path" v-for="(route, index) in routes">
          <router-link v-if="route.meta.visible" :to="route.path.toLowerCase()">
            {{ route.name }}
          </router-link>
        </template>
      </nav>

      <!-- If on small screen -->
      <nav class="nav small" v-else>
        <div id="nav-icon3" :class="classNames" @click="showButton">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div id="home-dropdown-small" :class="dropdownClass" @click="showButton">
          <!-- Router link to other paths -->
          <template :key="route.path" v-for="(route, index) in routes">
            <router-link
              v-if="route.meta.visible"
              :to="route.path.toLowerCase()"
            >
              {{ route.name }}
            </router-link>
          </template>
        </div>
      </nav>

      <div class="header-middle-text d-flex">
        <h4 class="text-white">Save My World,</h4>
        <h4 class="text-white">Together</h4>
      </div>
      <!-- SVG birds animation -->
      <animated-birds />

      <a @click="$refs.main.$el.scrollIntoView()" class="header-arrow">
        <span></span>
      </a>
    </header>
    <!-- About us -->
    <about id="main" ref="main" />
    <!-- Block about what the site is -->
    <!-- <div class="row">
      <div class="col-1"></div>
      <div class="col-lg-4 text-white alignment-left my-3">
        Climate change will affect all of us, whether directly or indirectly. We
        all have a stake in helping to reduce our emissions and in preparing for
        the effects of climate change.
      </div>
    </div> -->

    <!--How we can play our part-->
    <future ref="future" />
    <!-- remove chart component first because its buggy -->
    <!-- <three-rs /> -->

    <div class="call-to-action header">
      <h3 class="text-white">
        You have the power to <span id="savemyworld">#SaveOurWorld</span>
      </h3>
    </div>

    <div class="start-learning">
      <div class="typewriter">
        <h1 class="typewriter-text">Start Learning Now!</h1>
        <br />
        <br />
        <button @click="pushToQuiz()" class="test test-white">
          Take me away
          <font-awesome-icon :icon="['fas', 'hand-holding-heart']" />
        </button>
      </div>
    </div>
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
import Clothes from "@/assets/img/clothes.webp";
import LandingPage from "@/assets/img/LandingPage.webp";

import Navbar1 from "@/Layout/Navbar1.vue";

export default {
  name: "Home",
  components: {
    About,
    ThreeRs,
    Future,
    AnimatedBirds,
    Navbar1,
  },
  data() {
    return {
      Globe,
      Guide,
      Recycle,
      GlobeGuide,
      Clothes,
      LandingPage,
      fullView: true,
      dropdownClass: "dropdown-content",
      dropdownShown: false,
      classNames: { open: false, "ml-auto": true },
    };
  },
  methods: {
    pushToQuiz() {
      this.$router.push("/quiz");
    },
    showButton() {
      if (this.dropdownShown) {
        this.dropdownShown = false;
        this.dropdownClass = "dropdown-content";
        this.classNames.open = false;
      } else {
        this.dropdownShown = true;
        this.dropdownClass = "dropdown-content show-content";
        this.classNames.open = true;
      }
    },
  },
  computed: {
    routes() {
      console.log(this.$router.options.routes);
      return this.$router.options.routes;
    },
  },
  created() {
    if (window.innerWidth < 760) {
      this.fullView = false;
    }
    //   track the width on resize
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        //   reset it if you expand the screen
        this.dropdownShown = false;
        this.dropdownClass = "dropdown-content";
        this.fullView = true;
        this.classNames.open = false;
      } else {
        this.fullView = false;
      }
    });
  },
};
</script>

<style lang="scss">
@include animated-button("test");
.home-page-wrapper {
  // min-height: 100vh;
  font-size: $variable-font;
  overflow-x: hidden;

  .header {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    max-height: 100vh;
    padding: 0.5rem;
    background-image: url("~@/assets/img/LandingPage3.webp");
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
      margin-bottom: 30px;
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

  .small {
    position: relative;
    padding: 20px 20px 30px;
    margin-left: auto;

    .dropdown-content {
      position: absolute;
      top: 60px;
      right: 0px;
      display: none;
      flex-direction: column;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      width: 200px;

      &.show-content {
        display: flex;
      }

      a {
        color: white;
        padding: 12px 16px;
        margin-left: 0px;
        margin-right: 0px;
        text-decoration: none;
        display: flex;
        text-align: left;

        &:hover {
          background-color: $bg-color-primary;
        }
      }
    }
  }

  .hero {
    position: relative;
    z-index: 1;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      // background-color: rgba(21, 20, 51, 0.8);
      z-index: -1;
    }

    .bg-image-holder {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: url("~@/assets/img/LandingPage3.webp") center center;
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

  .call-to-action {
    padding: 3rem;
    background-image: url("~@/assets/img/LandingPage.webp");
    height: 6550px;
  }

  .start-learning {
    padding: 0.5rem;
    height: 300px;
    background: #9796f0; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #fbc7d4,
      #9796f0
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #fbc7d4,
      #9796f0
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display: flex;
    flex-direction: column;
  }

  .typewriter {
    margin: auto;
    // width: 60%;
  }

  .test {
    @extend .ani-btn;
  }

  .test-white {
    @extend .ani-btn-white;
  }
}

// Accounting for the different breakpoints

@media screen and (max-width: 230px) {
  #home-dropdown-small {
    width: 150px;
  }
}

@media screen and (min-width: 468px) {
  h1 {
    font-size: 40px;
  }
}

// @media screen and (max-width: 768px) {
//   .typewriter {
//     width: 90%;
//   }
// }

// @media screen and (min-width: 992px) {
//   .home-page-wrapper {
//     width: 70%;
//   }
// }

// @media screen and (min-width: 1400px) {
//   .home-page-wrapper {
//     width: 60%;
//   }
// }

@media screen and (max-width: 468px) {
  .typewriter {
    width: 90%;

    h1 {
      font-size: $font-size-small;
    }
  }
}

@media screen and (max-width: 768px) {
  .typewriter {
    width: 90%;
  }
}

#savemyworld {
  color: yellow;
}
</style>
