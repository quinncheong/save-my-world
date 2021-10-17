<template>
  <nav id="nav">
    <!-- <router-link id="home" to="/">Home img</router-link> -->
    <router-link id="home" to="/">
      <img class="homeimg" src="@/assets/img/world.png" alt="Globe Icon" />
    </router-link>
    <router-link to="/news">News</router-link>
    <router-link to="/community">Community</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/profile">Profile</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
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

.homeimg {
  border-radius: 50%;
}
</style>
