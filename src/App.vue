<template>
  <div>
    <div id="nav">
      <!-- <router-link id="home" to="/">Home img</router-link> -->
      <router-link id="home" to="/"><img class="homeimg" src="@/assets/img/world.png" alt=""></router-link>
      <router-link to="/news">News</router-link>
      <router-link to="/community">Community</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/profile">Profile</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
// CSS reset
html {
  box-sizing: border-box;
  font-size: $font-size-primary;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

// CSS of the app and navbar

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $font-color-primary;
  background-color: $bg-color-primary;
  height: 100vh;
}

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




