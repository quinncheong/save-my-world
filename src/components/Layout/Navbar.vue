<template>
  <nav class="nav" v-if="fullView">
    <!-- <router-link id="home" to="/">Home img</router-link> -->
    <router-link id="home" to="/">
      <img class="homeimg" src="@/assets/img/world.png" alt="Globe Icon" />
    </router-link>
    <router-link :key="view" :to="view.toLowerCase()" v-for="view in views">
      {{ view }}
    </router-link>
  </nav>

  <nav class="nav small" v-else>
    <!-- <router-link id="home" to="/">Home img</router-link> -->
    <div class="top">
      <router-link id="home" to="/">
        <img class="homeimg" src="@/assets/img/world.png" alt="Globe Icon" />
      </router-link>
      <button @click="showButton()" class="nav-dropdown-button btn btn-success">
        Dropdown
      </button>
    </div>
    <div :class="dropdownClass">
      <router-link :key="view" :to="view.toLowerCase()" v-for="view in views">
        {{ view }}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      fullView: true,
      dropdownClass: "dropdown-content",
      dropdownShown: false,
      views: ["News", "Visualise", "Community", "Login"],
    };
  },
  methods: {
    showButton() {
      if (this.dropdownShown) {
        this.dropdownShown = false;
        this.dropdownClass = "dropdown-content";
      } else {
        this.dropdownShown = true;
        this.dropdownClass = "dropdown-content show-content";
      }
    },
  },
  created() {
    //   track the width on resize
    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        //   reset it if you expand the screen
        this.dropdownShown = false;
        this.dropdownClass = "dropdown-content";
        this.fullView = true;
      } else {
        this.fullView = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 30px;
  background-color: $bg-color-primary;
  display: flex;
  justify-content: flex-end;

  #home {
    margin-right: auto;
    margin-left: 0px;
    .homeimg {
      border-radius: 50%;
      height: 30px;
    }
  }

  a {
    font-weight: bold;
    color: $font-color-primary;
    margin: 0 1.5rem;
    text-decoration: none;

    &.router-link-exact-active {
      color: $font-color-secondary;
    }

    &.router-link-exact-visited {
      color: $font-color-secondary;
    }

    &:hover {
      color: $font-color-secondary;
    }
  }

  &.small {
    flex-direction: column;
    align-items: space-around;
    position: relative;

    .top {
      display: flex;
      align-content: center;

      // For dropdown
      .dropdown-button {
        font-size: $font-size-primary;
        background-color: inherit;
        font-family: inherit; /* Important for vertical align on mobile phones */
        margin: 0; /* Important for vertical align on mobile phones */
      }
    }

    .dropdown-content {
      position: absolute;
      top: 80px;
      right: 30px;
      display: none;
      flex-direction: column;
      background-color: $bg-color-secondary;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;

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
          background-color: $testing-variable;
        }
      }
    }
  }
}
</style>
