<template>
  <section class="about-wrapper container mt-3">
    <div class="col-md-8 mx-auto text-center">
      <h1 class="mb-2">About Us</h1>
      <p>
        With us, you'll get to learn more about how you can play your part in
        saving Gaia as well as getting more insights on how our beloved mother
        earth is affected by climate change and it's impacts
      </p>
    </div>

    <div class="cards-wrapper">
      <!-- V-for for each card -->
      <div class="service card-effect col-sm-5 col-lg-2" :key="card.title" v-for="card of cards">
        <router-link :to="card.link">
          <!-- <div class="iconbox">
            <i class="bx bxs-check-shield"></i>
          </div> -->
          <h5 class="service-card-title">{{ card.title }}</h5>
          <img class="service-img" :src="getUrl(card.imageSrc)" />
          <p class="service-card-desc">
            {{ card.description }}
          </p>
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
          description:
            "Learn more about climate change and its impacts through our unique gamification system",
          image: "../assets/img/learn.png",
          imageSrc: "learn.webp",
          link: "/quiz",
        },
        {
          title: "Images of Change",
          description:
            "Explore how Gaia has evolved over time using state of the art imagery",
          image: "@/assets/img/imagec.png",
          imageSrc: "imagec.webp",
          link: "/image",
        },
        {
          title: "Graphical Visuals",
          description:
            "See beautiful visuals of how climate change has affected the world",
          image: "@/assets/img/charts.png",
          imageSrc: "charts.webp",
          link: "/charts",
        },
        {
          title: "Disaster Map",
          description:
            "With mapbox, we can navigate the world to explore the different disasters that has occured",
          image: "@/assets/img/mapbox.png",
          imageSrc: "mapbox.webp",
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
  font-size: $font-size-small;
  margin-bottom: 2rem;

  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem 2rem;
    justify-content: center;
    margin-top: 1rem;

    .service {
      position: relative;
      z-index: 2;

      &:hover .iconbox {
        background-color: var(--white);
        color: var(--primary);
      }

      &:hover h5,
      &:hover p {
        color: var(--white);
      }

      .service-img {
        height: 100px;
      }

      .card-title {
      }

      .card-desc {
        text-align: justify;
      }
    }
  }
}

.card-effect {
  // box-shadow: var(--box-shadow);
  background-color: var(--white);
  transition: all 0.35s ease;

  &:hover {
    box-shadow: none;
    transform: translateY(5px);
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
@media screen and (min-width: 468px) {
  .about-wrapper {
    width: 80%;
    font-size: $variable-font;

    .cards-wrapper {
      flex-direction: row;
      margin-top: 2rem;

      .service-img {
        height: 50%;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .about-wrapper {
    width: 90%;
  }
}

@media screen and (min-width: 992px) {
  .about-wrapper {
    width: 80%;
  }
}

@media screen and (min-width: 1400px) {
  .about-wrapper {
    width: 70%;
  }
}
</style>
