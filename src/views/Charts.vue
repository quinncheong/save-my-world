<template>
  <div class="chart-wrapper">
    <h2 class="chart-title mb-3">Climate Visual Charts</h2>
    <p class="chart-details mb-3">
      This series of visualisations help us understand how some of Earth's key
      climate indicators are changing throughout history
    </p>

    <p class="chart-select mb-3">Select a chart to explore more</p>

    <div class="charts-card-wrapper">
      <ChartsCard
        v-for="chart in charts"
        :key="chart.id"
        :name="chart.name"
        :src="chart.src"
        @click="setSelectedChart(chart.id)"
      />
    </div>
    <div v-if="selectedChart === 0"></div>
    <div v-else-if="selectedChart === 1">
      <iframe src="https://datahub.io/core/glacier-mass-balance/view/0" width="100%" height="475px" frameborder="0"></iframe>

      <div class="card mt-4">
      <div class="card-body text-dark">
        This chart shows the visualisations of the annual mass balance of glaciers throughout the years and how is has been dwindling at an increasing rate
      </div>
    </div>
    
    
    </div>
    <div v-else-if="selectedChart === 2">
      <AirPollutionChart />
    </div>
    <div v-else>
      <TempChart />
    </div>
    <!-- <MainChart /> -->

    <!-- <div class="main-chart">
      <iframe
        src="https://datahub.io/core/co2-ppm/view/1"
        height="100vh"
        width="100%"
        frameborder="0"
      ></iframe>
    </div> -->
  </div>
</template>

<script>
import ChartsCard from "../components/Charts/ChartsCard.vue";
import MainChart from "@/components/Charts/MainChart.vue";
import TempChart from "@/components/Charts/TemperatureChart.vue";
import AirPollutionChart from "@/components/Charts/AirPollutionChart.vue";

export default {
  name: "Charts",
  components: {
    ChartsCard,
    MainChart,
    TempChart,
    AirPollutionChart,
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
      selectedChart: 0,
    };
  },
  methods: {
    setSelectedChart(id) {
      this.selectedChart = id;
      console.log(this.selectedChart)
    }
  }
 };
</script>

<style lang="scss" scoped>
.chart-wrapper {
  @extend %page-wrapper;

  .chart-select {
    font-weight: bold;
  }

  .charts-card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .main-chart {
    // display: none;
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 100%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */

    iframe {
      margin-right: auto;
      margin-left: auto;
    }
  }
}

// display 70% width on desktop
@media screen and (min-width: 768px) {
  .chart-wrapper {
    width: 70%;
  }
}

// display 70% width on large screen sizes
@media screen and (min-width: 992px) {
  .chart-wrapper {
    width: 60%;
  }
}

// // display 70% width on extra large screen sizes
@media screen and (min-width: 1200px) {
  .chart-wrapper {
    width: 50%;
  }
}

// // display 70% width on extra large screen sizes
@media screen and (min-width: 1350px) {
  .chart-wrapper {
    width: 40%;
    font-size: 15px;
  }
}
</style>
