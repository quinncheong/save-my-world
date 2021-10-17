<template>
  <nav id="nav" v-if="windowWidth > 800">
    <!-- <router-link id="home" to="/">Home img</router-link> -->
    <router-link id="home" to="/">
      <img class="homeimg" src="@/assets/img/world.png" alt="Globe Icon" />
    </router-link>
    <router-link to="/news">News</router-link>
    <router-link to="/community">Community</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/profile">Profile</router-link>
  </nav>

  <nav id="nav" v-else>
    <!-- <router-link id="home" to="/">Home img</router-link> -->
    <router-link id="home" to="/">
      <img class="homeimg" src="@/assets/img/world.png" alt="Globe Icon" />
    </router-link>
    <div class="nav-dropdown">
      <button class="nav-dropdown-button btn btn-success">Dropdown</button>
      <div class="dropdown-content dropleft">
        <router-link to="/news">News</router-link>
        <router-link to="/community">Community</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/profile">Profile</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      windowWidth: 0,
    };
  },
  mounted() {
    //   track the width on resize
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;
  background-color: $bg-color-primary;
  display: flex;
  justify-content: flex-end;

  #home {
    margin-right: auto;

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
}

// For dropdown
.nav-dropdown {
  .dropdown-button {
    font-size: $font-size-primary;
    background-color: inherit;
    font-family: inherit; /* Important for vertical align on mobile phones */
    margin: 0; /* Important for vertical align on mobile phones */
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: $bg-color-primary;
    // min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;

    a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;

      &:hover {
        background-color: $bg-color-primary;
      }
    }
  }

  &:hover .dropdown-content {
    display: block;
  }
}
</style>
