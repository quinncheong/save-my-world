<template>
  <section class="about-wrapper container pt-5">
    <div class="row mb-2">
      <div class="col-md-8 mx-auto text-center">
        <h1 class="mb-2">About Us</h1>
        <p>
          With us, you'll get to learn more about how you can play your part in
          saving Gaia as well as getting more insights on how our beloved mother
          earth is affected by climate change and it's impacts
        </p>
      </div>
    </div>

    <div class="row g-2">
      <!-- V-for for each card -->
      <div
        :key="card.title"
        v-for="card of cards"
        class="col col-sm-6 col-lg-3"
      >
        <router-link :to="card.link">
          <div class="service card-effect">
            <div class="iconbox">
              <i class="bx bxs-check-shield"></i>
            </div>
            <h5 class="mt-4 mb-2">{{ card.title }}</h5>
            <img
              class="img-fluid mx-auto d-block"
              :src="getUrl(card.imageSrc)"
            />
            <p>
              {{ card.description }}
            </p>
          </div>
        </router-link>
      </div>
      <!-- End of card v-for -->
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      cards: [
        {
          title: "Learning",
          description: "Learn more about climate change and its impacts through our unique gamification system",
          image: "../assets/img/learn.png",
          imageSrc: "learn.png",
          link: "/quiz",
        },
        {
          title: "Images of Change",
          description:
            "Explore how Gaia has evolved over time using state of the art imagery",
          image: "@/assets/img/imagec.png",
          imageSrc: "imagec.png",
          link: "/image",
        },
        {
          title: "Graphical Visuals",
          description:
            "See beautiful visuals of how climate change has affected the world",
          image: "@/assets/img/charts.png",
          imageSrc: "charts.png",
          link: "/charts",
        },
        {
          title: "Disaster Map",
          description:
            "With mapbox, we can navigate the world to explore the different disasters that has occured",
          image: "@/assets/img/mapbox.png",
          imageSrc: "mapbox.png",
          link: "/news",
        },
      ],
    };
  },
  methods: {
    getUrl(pic) {
      return require(`@/assets/img/${pic}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
//   font-size: $variable-font;
  font-size: $font-size-secondary;

  .card-effect {
    // box-shadow: var(--box-shadow);
    background-color: var(--white);
    padding: 25px;
    transition: all 0.35s ease;

    &:hover {
      box-shadow: none;
      transform: translateY(5px);
    }
  }
}

.service {
  position: relative;
  z-index: 2;
  overflow: hidden;

  p {
    font-size: $font-size-secondary;
  }

  &::after {
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
    opacity: 1;
    top: 0;
  }

  &:hover .iconbox {
    background-color: var(--white);
    color: var(--primary);
  }

  &:hover h5,
  &:hover p {
    color: var(--white);
  }
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

// Accounting for the different breakpoints

// *{
//   font: $variable-font;
// }
@media screen and (min-width: 768px) {
  .about-wrapper {
    width: 80%;
    font-size: $variable-font;
    
  }
}

@media screen and (min-width: 992px) {
  .about-wrapper {
    width: 70%;
    // font-size: $variable-font-medium;
  }
}

@media screen and (min-width: 1400px) {
  .about-wrapper {
    width: 60%;

  }
}
</style>
