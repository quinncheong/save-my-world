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
  name: "Charts",
};
</script>

<style lang="scss" scoped>

</style>
