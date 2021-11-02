<template #btnAppend>
  <div>
    <Nav :navLinks="navLinks" :navConfig="navConfig" :btnConfig="btnConfig">
      <router-link id="home" to="/">
        <img class="homeimg" src="@/assets/img/world.png" alt="Globe Icon" />
      </router-link>
      <!-- A slot For your project Logo -->
    </Nav>
  </div>
</template>

<script>
import Nav from "vue-nav-ui";

export default {
  components: {
    Nav,
  },
  data() {
    return {
      navLinks: [
        {
          name: "Images Of Change",
          path: "/image",
        },
        {
          name: "Climate Charts",
          path: "/charts",
        },
        {
          name: "Disaster Map",
          path: "/news",
        },
      ],
      /* FOR YOUR NAVIGATION LINKING NAMES AND PATHS */
      navConfig: {
        whitespace: false /* GIVES PADDING TO YOUR NAV, IF SET TO FALSE, REMOVES PADDING */,
        navBg: "black" /* BACKGROUND COLOR OF YOUR NAV  */,
        navBorderRadius: "5px" /* BORDER RADIUS OF YOUR NAV */,
        linkFont: "poppins" /* FONT FAMILY OF YOUR NAV */,
        linkColor: "white" /* FONT COLOR OF YOUR NAV */,
        responsivePosition:
          "bottom" /* FOR CHANGING THE POSITION OF YOUR NAV WHEN RESPONSIVE. BOTTOM or TOP | The only two options */,
      },
      btnConfig: {
        btnLink: true /* FOR INITIALIZING NAV BUTTON USAGE, IF SET TO FALSE, REMOVES THE NAV BUTTON  */,
        btnUrl: "/quiz" /* LINK URL OF YOUR NAV BUTTON */,
        btnText: "Test your knowledge" /* NAV BUTTON TEXT */,
        btnBg: "Green" /* BACKGROUND COLOR OF YOUR NAV BUTTON  */,
        btnTextColor: "white" /* FONT COLOR OF YOUR NAV BUTTON*/,
        btnBorderWidth: "0" /* BORDER WIDTH OF YOUR NAV BUTTON */,
        btnBorderColor: "black" /* BORDER COLOR OF YOUR NAV BUTTON */,
        btnBorderRadius: "20px" /* BORDER RADIUS OF YOUR NAV BUTTON */,
        btnMargin: "30px" /* MARGIN OF YOUR NAV BUTTON */,
      },
    };
  },
  computed: {
    // Current route I guess. Can use to dynamically render navbar active links
    view() {
      return this.$route.name;
    },

    // return all routes from router
    routes() {
      return this.$router.options.routes;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  font-size: $variable-font;
}

.homeimg {
  border-radius: 50%;
  height: 30px;
  z-index: 999;
}

a {
    font-size: $variable-font;
}
</style>
