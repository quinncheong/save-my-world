<template>
  <footer class="footer-bg-wrapper">
    <div class="footer-content-wrapper">
      <div class="links">
        <div class="row text-center justify-content-center">
          <template :key="route.path" v-for="(route, index) in routes">
          
            <div class="col-sm-2">
              <router-link v-if="route.meta.visible" :to="route.path.toLowerCase()">
                {{ route.name }}
              </router-link>
            </div>
          
          </template>
        </div>
      </div>
      <hr class="w-75 justify-self-center mx-auto" />
      <div class="footer-text mt-2 mx-2">
        Save My World is a team of Software Developers passionate about the
        environment. Situated in Singapore and developing software for 2 years,
        Save My World provides a platform for people to save the environment and
        use graphical techniques to observe how Earth is changing. Save My World
        aims to spread awareness about the environment using beautiful visuals,
        exceptional gamification, and factbased charts.
      </div>
      <div class="footer-social my-4">
        <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fcampaign%2Flanding.php%3Fcampaign_id%3D1635645017%26extra_1%3Ds%257Cc%257C313627652544%257Ce%257Cfacebook%2527%257C%26placement%26creative%3D313627652544%26keyword%3Dfacebook%2527%26partner_id%3Dgooglesem%26extra_2%3Dcampaignid%253D1635645017%2526adgroupid%253D60549328697%2526matchtype%253De%2526network%253Dg%2526source%253Dnotmobile%2526search_or_content%253Ds%2526device%253Dc%2526devicemodel%253D%2526adposition%253D%2526target%253D%2526targetid%253Dkwd-362360550869%2526loc_physical_ms%253D9062530%2526loc_interest_ms%253D%2526feeditemid%253D%2526param1%253D%2526param2%253D%26gclid%3DCj0KCQiA4b2MBhD2ARIsAIrcB-Rtvf3kc9eebVytSOvvg4_qrOk-iwqPHwqWDdj6vmIxOb16ncVmz2oaAlTsEALw_wcB"><font-awesome-icon :icon="['fab', 'facebook-square']" /></a>
        <a href="https://github.com/quinncheong/save-my-world.git"><font-awesome-icon :icon="['fab', 'github']" /></a>
        <a href="https://www.linkedin.com"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
        <a href="https://twitter.com/i/flow/login"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
        <a href="https://www.instagram.com/accounts/login/"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
        <a href="https://login.microsoftonline.com/"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
      </div>
      <div class="footer-copyright">
        <p class="m-0 pb-2 text-center text-white">
          © {{ date }} Copyright: WAD 2 Gods 🤩🥺
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
    // padding: 1rem;
    align-items: center;
    text-align: center;
    text-justify: inter-word;

    .links {
      display: flex;
      width: 100%;
      justify-content: center;
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
    width: 70%;
    // text-align: justify;
  }
}

// Remove padding when screen is small
@media (min-width: 1200px) {
  .footer-bg-wrapper {
    width: 60%;
    // text-align: justify;
  }
}
</style>
