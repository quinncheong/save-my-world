<template>
  <footer class="footer-wrapper">
    <div class="links">
      <template :key="route.path" v-for="(route, index) in routes">
        <router-link v-if="route.meta.visible" :to="route.path.toLowerCase()">
          {{ route.name }}
        </router-link>
      </template>
    </div>

    <hr class="w-75 justify-self-center mx-auto" />
    <div class="footer-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
      necessitatibus dolores delectus est qui labore! Magnam officia quasi sequi
      blanditiis.
    </div>
    <div class="footer-social">
      <font-awesome-icon :icon="['fas', 'phone']" />

    </div>
    <div class="footer-copyright">
      <p class="m-0 text-center text-white">
        © {{ date }} Copyright: WAD 2 Gods 🤩 🥺
      </p>
    </div>
  </footer>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

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
  padding: 1rem 6rem 0 ;
  justify-content: center;

  .links {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0 0 0;
    font-weight: bold;
  }

  .footer-text {
    margin-bottom: 2rem;
  }
}
</style>
