<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p class="gg">Hello gg</p>
  </div> -->

  <div class="grand-parent">
    <div class="parent1">
      <div class="parent2">
        <p class="child">Hello im the child</p>
        <p class="new-style"></p>
        <p class="new-style2"></p>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from '@/components/Footer.vue';

export default {
  name: "Home",
  components: {
    HelloWorld,
    Footer
  },
};
</script>

<style lang="scss">
.new-style {
 @extend %font-text
}
.new-style2 {
  color: $font-color-primary;
}

</style>

