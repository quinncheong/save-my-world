<template>
  <div class="container">
    <div class="overlay" id="particles-js"></div>
    <div class="content">
      <div class="message">
        <p class="message-heading">Page Not Found</p>
        <p class="message-description">
          The page you are looking for was moved, removed, renamed or might
          never existed.
        </p>
      </div>
      <div class="links">
        <a href="http://joashpereira.com/"></a>
        <a href="mailto:name@example.com"></a>
      </div>
    </div>
    <div class="social">
      <ul class="social-list">
        <li>
          <a href=""><i class="fa fa-facebook"></i></a>
        </li>
        <li>
          <a href=""><i class="fa fa-twitter"></i></a>
        </li>
        <li>
          <a href=""><i class="fa fa-google-plus"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
"use strict";
particlesJS.load("particles-js", "js/particles-404.json", function () {});

export default {
  name: "ErrorNew",
};
</script>

<style lang="scss" scoped></style>
