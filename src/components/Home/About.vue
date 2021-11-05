<template>
  <section id="services">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-8 mx-auto text-center">
          <h1>About Us</h1>
          <p>
            With us, you'll get to learn more about how you can play your part
            in saving Gaia as well as getting more insights on how our beloved
            mother earth is affected by climate change and it's impacts
          </p>
        </div>
      </div>
      <div class="row g-4">
        <!--one card-->
        <!-- <a href='../src/views/Quiz.vue'> -->
        <div class="col-lg-3 col-sm-6">
          <a href="../src/views/Quiz.vue">
            <div class="service card-effect bounceInUp">
              <div class="iconbox">
                <i class="bx bxs-check-shield"></i>
              </div>
              <h5 class="mt-4 mb-2">Learning</h5>
              <img
                class="imgsize mx-auto d-block"
                src="@/assets/img/learn.png"
              />
              <p>
                Learn more about cmilate change and its effects on mother earth
              </p>
            </div>
          </a>
        </div>
        <!-- </a> -->

        <div class="col-lg-3 col-sm-6">
          <a href="../src/views/ImageSlide.vue">
            <div class="service card-effect">
              <div class="iconbox">
                <i class="bx bxs-comment-detail"></i>
              </div>
              <h5 class="mt-4 mb-2">Images of Change</h5>
              <img
                class="imgsize mx-auto d-block"
                src="@/assets/img/imagec.png"
              />
              <p>Explore how Gaia has evolved over time with image visuals</p>
            </div>
          </a>
        </div>

        <div class="col-lg-3 col-sm-6">
          <a href="../src/views/ImageSlide.vue">
            <div class="service card-effect">
              <div class="iconbox">
                <i class="bx bxs-cog"></i>
              </div>
              <h5 class="mt-4 mb-2">Graphical Visuals</h5>
              <img
                class="imgsize mx-auto d-block"
                src="@/assets/img/charts.png"
              />
              <p>
                See real-time statitics of how climate change has affected Sea
                Ice, Carbon Dioxide, Global Temperature
              </p>
            </div>
          </a>
        </div>

        <div class="col-lg-3 col-sm-6">
          <a href="~@/views/Visualise.vue">
            <div class="service card-effect">
              <div class="iconbox">
                <i class="bx bxs-heart"></i>
              </div>
              <h5 class="mt-4 mb-2">Disaster Map</h5>
              <img
                class="imgsize mx-auto d-block"
                src="@/assets/img/mapbox.png"
              />
              <p>
                With mapbox, we can navigate the world to explore the different
                disasters that has occured
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- SERVICES -->
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
section {
  padding-top: 120px;
  padding-bottom: 120px;
}

.card-effect {
  // box-shadow: var(--box-shadow);
  background-color: var(--white);
  padding: 25px;
  transition: all 0.35s ease;
}

.card-effect:hover {
  box-shadow: none;
  transform: translateY(5px);
}

// .iconbox {
//   width: 54px;
//   height: 54px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: var(--primary);
//   color: black;
//   font-size: 32px;
//   border-radius: 100px;
//   flex: none;
// }

.service {
  position: relative;
  z-index: 2;
  overflow: hidden;
}
.service::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: -100%;
  left: 0;
  background-color: var(--primary);
  z-index: -1;
  opacity: 0;
  transition: all 0.4s ease;
}

.service:hover .iconbox {
  background-color: var(--white);
  color: var(--primary);
}

.service:hover h5,
.service:hover p {
  color: var(--white);
}

.service:hover::after {
  opacity: 1;
  top: 0;
}
</style>
