<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container px-5">
      <a class="navbar-brand" href="#!">Start Bootstrap</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#!">Home</a>
          </li>
          <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#!">Contact</a></li>
          <li class="nav-item"><a class="nav-link" href="#!">Services</a></li>
        </ul>
      </div>
    </div>
  </nav> -->

  <nav class="nav" v-if="fullView">
    <!-- <router-link id="home" to="/">Home img</router-link> -->
    <router-link id="home" to="/">
      <img class="homeimg" src="@/assets/img/logo5.png" alt="Globe Icon" />
    </router-link>

    <!--added in a class called topnav (remvoed)-->
    <template :key="route.path" v-for="(route, index) in routes">
      <router-link v-if="route.meta.visible" :to="route.path.toLowerCase()">
        {{ route.name }}
      </router-link>
    </template>
  </nav>

  <nav class="nav small" v-else>
    <!-- <router-link id="home" to="/">Home img</router-link> -->
    <!-- <router-link id="home" to="/">
        <img class="homeimg" src="@/assets/img/logo5.png" alt="Globe Icon" />
      </router-link> -->
    <div id="nav-icon3" :class="classNames" @click="showButton">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div :class="dropdownClass" @click="showButton">
      <!-- router link to home -->
      <router-link :to="routes[0].path.toLowerCase()">
        Home
      </router-link>
      <!-- Router link to other paths -->
      <template :key="route.path" v-for="(route, index) in routes">
        <router-link v-if="route.meta.visible" :to="route.path.toLowerCase()">
          {{ route.name }}
        </router-link>
      </template>
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
      views: ["News", "Charts", "Image", "Community", "Profile"],
      classNames: { open: false, "ml-auto": true },
    };
  },
  methods: {
    showButton() {
      if (this.dropdownShown) {
        this.dropdownShown = false;
        this.dropdownClass = "dropdown-content";
        this.classNames.open = false;
      } else {
        this.dropdownShown = true;
        this.dropdownClass = "dropdown-content show-content";
        this.classNames.open = true;
      }
    },
  },
  created() {
    if (window.innerWidth < 760) {
      this.fullView = false;
    }
    //   track the width on resize
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        //   reset it if you expand the screen
        this.dropdownShown = false;
        this.dropdownClass = "dropdown-content";
        this.fullView = true;
        this.classNames.open = false;
      } else {
        this.fullView = false;
      }
    });
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
.nav {
  padding: 20px 40px;
  background-color: $bg-color-primary;
  display: flex;
  justify-content: flex-end;
  font-size: calc($font-size-primary * 0.5);

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
    margin: 0 0.5rem;
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
    padding: 20px 40px 30px;

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

  //   .checkbtn{
  //   font-size: 30px;
  //   color: white;
  //   line-height:80px;
  //   margin-right: 40px;
  //   float: right;
  //   display: None;

  // }
}

#nav-icon1,
#nav-icon2,
#nav-icon3,
#nav-icon4 {
  width: 45px;
  height: 10px;
  position: relative;
  margin-left: auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#nav-icon1 span,
#nav-icon3 span,
#nav-icon4 span {
  display: block;
  position: absolute;
  height: 5px;
  width: 100%;
  background: white;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}
#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),
#nav-icon3 span:nth-child(3) {
  top: 10px;
}

#nav-icon3 span:nth-child(4) {
  top: 20px;
}

#nav-icon3.open span:nth-child(1) {
  top: 15px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}

.checkbtn {
  font-size: 30px;
  color: white;
  line-height: 80px;
  margin-right: 40px;
  float: right;
  display: none;
  // content: ''
}

#check:checked + label {
  #middle {
    display: none;
  }
}

.nav-label {
  border: 1px solid white;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before,
  &::after {
    display: block;
    background: white;
    height: 2px;
    width: 2em;
    border-radius: 2px;
    position: relative;
  }

  &:hover {
    cursor: pointer;
    border: none;
  }
}

.menu {
  width: 35px;
  height: 3px;
  background-color: rgb(255, 255, 255);
  // content: '';
  // padding: 10px;
  margin: 3px;
  padding: 1px;
}

//for the responsiveness of the top nav
// @media screen and (max-width: 600px) {
//   .topnav a:not(:first-child) {display: none;}
//   .topnav a.icon {
//     float: right;
//     display: block;
//   }
// }
</style>
