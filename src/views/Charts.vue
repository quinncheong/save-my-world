<template>
  <div class="chart-wrapper">
    <h2 class="chart-title mb-3">Climate Visual Charts</h2>
    <p class="chart-details mb-3">
      This series of visualisations help us understand how some of Earth's key
      climate indicators are changing throughout history
    </p>

    <p class="chart-select mb-3">Select a chart to explore more</p>

    <div class="charts-card-wrapper mb-3">
      <ChartsCard v-for="chart in charts" :key="chart.id" :name="chart.name" :src="chart.src" />
    </div>
    <!-- <iframe
      src="https://datahub.io/core/co2-ppm/view/1"
      height="500px"
      width="400px"
      frameborder="0"
    ></iframe> -->
  </div>
</template>

<script>
import ChartsCard from "../components/Charts/ChartsCard.vue";
export default {
  name: "Charts",
  components: {
    ChartsCard,
  },
  data() {
    return {
      charts: [
        {
          id: 1,
          name: "Sea Ice",
          src: "",
        },
        {
          id: 2,
          name: "Carbon Dioxide",
          src: "",
        },
        {
          id: 3,
          name: "Global Temperature",
          src: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.chart-wrapper {
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-around;

  .chart-select {
    font-weight: bold;
  }

  .charts-card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

}
</style>
