<template>
  <footer class="footer-wrapper">
    <div class="links">
      <div :key="route.path" v-for="(route, index) in routes">
        <router-link v-if="route.meta.visible" :to="route.path.toLowerCase()">
          {{ route.name }}
        </router-link>
      </div>
    </div>

    <hr class="w-75 justify-self-center mx-auto" />
    <div class="footer-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
      necessitatibus dolores delectus est qui labore! Magnam officia quasi sequi
      blanditiis.
    </div>
    <div class="footer-social"></div>
    <div class="footer-copyright">
      <p class="m-0 text-center text-white">
        © {{ date }} Copyright: WAD 2 Gods 🤩 🥺
      </p>
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

.footer-wrapper {
  @extend %page-wrapper;
  font-family: "Montserrat";
  padding: 2rem 2rem 0 2rem;
  justify-content: center;

  .links {
    padding: 2rem;
    margin-bottom: 2rem;
  }

  .footer-text {
    margin-bottom: 2rem;
  }
}
</style>
