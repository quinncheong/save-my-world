<template>
  <!--bootstrap tabs bars-->
  <div class="three-wrapper">
    <ul class="nav flex-column">
      <li class="nav-item">
        <a
          class="nav-link"
          data-bs-target="#reduce"
          data-bs-toggle="tab"
          href="#reduce"
          >Reduce</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          data-bs-target="#reuse"
          data-bs-toggle="tab"
          href="#reuce"
          >Reuse</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          data-bs-target="#recycle"
          data-bs-toggle="tab"
          href="#recycle"
          >Recycle
          <!-- svg recycle image -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-recycle"
            viewBox="0 0 16 16"
          >
            <path
              d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"
            /></svg
        ></a>
      </li>
    </ul>

    <div class="tab-content">
      <div
        :id="r.title"
        :class="classObj"
        :key="index"
        v-for="(r, key, index) in tabs"
      >
        <h3>{{ r.content }}</h3>
        <img class="imgsize" :src="getUrl(r.src)" />
        <p class="p-tag-left">
          {{ r.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThreeRs",
  data() {
    return {
      activeTab: "reduce",
      tabs: {
        reduce: {
          title: "reduce",
          icon: "fa-minus-circle",
          content: "Reduce",
          src: "planetearth.png",
          desc: `The best way to manage waste is to not produce it. This can be done by shopping carefully and being aware of a few guidelines:`,
          listing: [
            "Buy products in bulk. Larger, economy-size products or ones in concentrated form use less packaging and usually cost less per ounce.",
            "Avoid disposable goods, such as paper plates, cups, napkins, razors, and lighters. Throwaways contribute to the problem, and cost more because they must be replaced again and again.",
            "Buy durable goods – ones that are well-built or that carry good warranties. They will last longer, save money in the long run and save landfill space.",
          ],
        },
        reuse: {
          title: "reuse",
          icon: "fa-recycle",
          content: "Reuse",
          desc: "Sometimes it takes creativity:",
          src: "clothes.png",
          listing: [
            `Avoid disposable goods, such as paper plates, cups, napkins, razors, and lighters. Throwaways contribute to the problem, and cost more because they must be replaced again and again.`,
            `Buy durable goods – ones that are well-built or that carry good warranties. They will last longer, save money in the long run and save landfill space.`,
            `Use cloth napkins instead of paper napkins.`,
            `Use a dish cloth instead of paper towels.`,
          ],
        },
        recycle: {
          title: "recycle",
          icon: "fa-recycle",
          content: "Recycle",
          src: "recyclingbin.png",
          desc: "Recycling is a series of steps that takes a used material and processes, remanufactures, and sells it as a new product. Begin recycling at home and at work:",
          listing: [
            "Buy products made from recycled material. Look for the recycling symbol or ask store managers or salesmen",
            "Check collection centers and curbside pickup services to see what they accept, and begin collecting those materials. These can include metal cans, newspapers, paper products, glass, plastics and oil.",
            "Consider purchasing recycled materials at work when purchasing material for office supply, office equipment or manufacturing.",
            "Buy products made from material that is collected for recycling in your community.",
            "Use recycled paper for letterhead, copier paper and newsletters.",
          ],
        },
      },
    };
  },
  methods: {
    getUrl(pic) {
      return require(`@/assets/img/${pic}`);
    },
  },
  computed: {
    classObj() {
      return {
        active: this.activeTab === this.tabs[this.activeTab].title,
        show: this.activeTab === this.tabs[this.activeTab].title,
        "tab-pane": true,
        "tab-div-content": true,
        fade: true,
      };
    },
  }
};
</script>

<style lang="scss" scoped>
.three-wrapper {
  font-size: $font-size-secondary;
  display: flex;
  margin: auto;
  align-items: center;

  .tab-div-content {
    display: flex;
    border-bottom: 1px solid purple;

    img {
      width: 50px;
    }
  }

  ul.listing {
    list-style-type: "✽  ";
    text-align: left;
    font-size: $variable-font-small;
  }

  ul.list-style {
    // list-style-type: "✽";
    color: green;
  }

  .p-tag-left {
    text-align: left;
    font-weight: bold;
  }
}
//for the css navigation tab
.nav-tabs .nav-link.active {
  background-color: purple;
  color: white;
  border: 3px solid purple;
}

.nav-tabs .nav-link {
  background-color: white;
  color: purple;
  border: 3px solid purple;
  margin-right: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
}

.nav-tabs .nav-link:hover {
  border: 3px solid purple;
}

// Accounting for the different breakpoints
@media screen and (min-width: 768px) {
  .three-wrapper {
    width: 80%;
  }
}

@media screen and (min-width: 992px) {
  .three-wrapper {
    width: 70%;
  }
}

@media screen and (min-width: 1400px) {
  .three-wrapper {
    width: 60%;
  }
}

// .heading {
//   font-weight: 900;
//   color: green;

//   --x-offset: -0.0625em;
//   --y-offset: 0.0625em;
//   --stroke: 0.025em;
//   --background-color: white;
//   --stroke-color: lightblue;

//   text-shadow: var(--x-offset) var(--y-offset) 0px var(--background-color),
//     calc(var(--x-offset) - var(--stroke)) calc(var(--y-offset) + var(--stroke))
//       0px var(--stroke-color);
// }
</style>
