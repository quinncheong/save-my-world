<template>
  <section class="container pt-5">
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
      <div :key="card.title" v-for="card of cards" class="col col-sm-6 col-md-3">
        <router-link :to="card.link">
          <div class="service card-effect bounceInUp">
            <div class="iconbox">
              <i class="bx bxs-check-shield"></i>
            </div>
            <h5 class="mt-4 mb-2">{{ card.title }}</h5>
            <img class="img-fluid mx-auto d-block" :src="getUrl(card.imageSrc)" />
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
          description: "Learn more about climate change and its impacts",
          image: "../assets/img/learn.png",
          imageSrc: "learn.png",
          link: "/quiz",
        },
        {
          title: "Images of Change",
          description:
            "Explore how Gaia has evolved over time with image visuals",
          image: "@/assets/img/imagec.png",
          imageSrc: "imagec.png",
          link: "/image",
        },
        {
          title: "Graphical Visuals",
          description:
            "See real-time statitics of how climate change has affected Sea Ice, Carbon Dioxide, Global Temperature",
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
  font-size: $variable-font;
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
