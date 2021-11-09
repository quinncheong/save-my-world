<template>
  <footer class="footer-bg-wrapper">
    <div class="footer-content-wrapper">
      <div class="links">
        <template :key="route.path" v-for="(route, index) in routes">
          <router-link v-if="route.meta.visible" :to="route.path.toLowerCase()">
            {{ route.name }}
          </router-link>
        </template>
      </div>

      <hr class="w-75 justify-self-center mx-auto" />
      <div class="footer-text mt-2">
        Save My World is a team of Software Developers passionate about the
        environment. Situated in Singapore and developing software for 2 years,
        Save My World provides a platform for people to save the environment and
        use graphical techniques to observe how Earth is changing. Save My World
        aims to spread awareness about the environment using beautiful visuals,
        exceptional gamification, and factbased charts.
      </div>
      <div class="footer-social my-4">
        <font-awesome-icon :icon="['fab', 'facebook-square']" />
        <font-awesome-icon :icon="['fab', 'github']" />
        <font-awesome-icon :icon="['fab', 'linkedin']" />
        <font-awesome-icon :icon="['fab', 'twitter']" />
        <font-awesome-icon :icon="['fab', 'instagram']" />
        <font-awesome-icon :icon="['fas', 'envelope']" />
      </div>
      <div class="footer-copyright">
        <p class="m-0 text-center text-white">
          © {{ date }} Copyright: WAD 2 Gods 🤩 🥺
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      fullView: true,
      dropdownClass: "dropdown-content",
      dropdownShown: false,
      views: ["News", "Charts", "Image", "Community"],
      date: new Date().getFullYear(),
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
@import url("https://fonts.googleapis.com/css?family=Montserrat");

.footer-bg-wrapper {
  background-color: $bg-color-primary;
  height: 100%;
  width: 100%;
  margin: auto;
  font-size: $variable-font;

  .footer-content-wrapper {
    @extend %page-wrapper;
    font-family: "Montserrat";
    padding: 1rem;
    align-items: center;
    text-align: center;
    text-justify: inter-word;

    .links {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 1rem 0 0 0;
      font-weight: bold;
    }

    .footer-text {
      margin-bottom: 0.5rem;
      font-size: 15px;
    }

    .footer-social {
      width: 40%;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: space-around;
    }
  }
}

// Remove padding when screen is small
@media (min-width: 768px) {
  .footer-bg-wrapper {
    width: 80%;
    // text-align: justify;
  }
}

// Remove padding when screen is small
@media (min-width: 992px) {
  .footer-bg-wrapper {
    width: 60%;
    // text-align: justify;
  }
}

// Remove padding when screen is small
@media (min-width: 1200px) {
  .footer-bg-wrapper {
    width: 50%;
    // text-align: justify;
  }
}
</style>