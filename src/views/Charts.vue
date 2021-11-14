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
        :information="chart.information"
        @click="setSelectedChart(chart.id)"
      />
    </div>

    <div v-if="selectedChart === 0"></div>
    <div v-else-if="selectedChart === 1">
      <!-- <iframe src="https://datahub.io/core/glacier-mass-balance/view/0" width="100%" height="475px" frameborder="0"></iframe>

      <div class="card mt-4">
      <div class="card-body text-dark bold">
        This chart shows the visualisations of the <span class='bold text-primary'>annual mass balance of glaciers</span> throughout the years and how is has been dwindling at an <span class='bold text-primary'>increasing rate</span>.
      </div>
    </div> -->
      <TempChart />
    </div>

    <div v-else-if="selectedChart === 2">
      <AirPollutionChart />
    </div>

    <div v-else>
      <!-- <TempChart /> -->
      <iframe 
      v-show="!loading"
        id="test"
        src="https://datahub.io/core/glacier-mass-balance/view/0"
        width="100%"
        height="500px"
        frameborder="0"
        @load="handleLoad"
      ></iframe>

      <div v-if="loading" class="loader"></div>

      <div class="card mt-4">
        <div class="card-body text-dark bold">
          This chart shows the visualisations of the
          <span class="bold text-primary">annual mass balance of glaciers</span>
          throughout the years and how is has been dwindling at an
          <span class="bold text-primary">increasing rate</span>.
        </div>
      </div>
    </div>

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
import TempChart from "@/components/Charts/TemperatureChart.vue";
import AirPollutionChart from "@/components/Charts/AirPollutionChart.vue";

export default {
  name: "Charts",
  components: {
    ChartsCard,
    TempChart,
    AirPollutionChart,
  },
  data() {
    return {
      charts: [
        {
          id: 1, //3
          name: "Global Temperature",
          src: "temp.webp",
          information:
            "Explore real-time statistics of how global temperature have changed over the years", //added
        },
        {
          id: 2, //2
          name: "Air Pollution",
          src: "Co2.webp",
          information:
            "Visualise real-time statistics of how air pollution has changed over time", //added
        },
        {
          id: 3, //1
          name: "Sea Ice",
          src: "seaIce.webp",
          information:
            "Explore real-time statistics of the average mass of glaciers worldwide", //added
        },
      ],
      selectedChart: 0,
      loading: false,
      hadLoaded: false,
    };
  },
  methods: {
    setSelectedChart(id) {
      this.selectedChart = id;

      if (id === 3 && !this.hasLoaded) {
        this.loading = true;
      }

      if (id !== 3) {
        this.hasLoaded = false;
      }
    },

    handleLoad() {
      this.loading = false;
      this.hasLoaded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.chart-wrapper {
  @extend %page-wrapper;

  .chart-select {
    font-weight: bold;
    font-style: italic;
    animation: fadeIn 3s ease-out;
  }

  //   @keyframes chartText {
  //     0%   {
  //     transform: translateX(200%);
  //     }
  //     100% {
  //     transform: translateX(0%);
  //     }
  // }

  .charts-card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .chart-title {
    animation: fadeIn 2.5s linear forwards;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .chart-details {
    animation: fadeIn 4.5s linear forwards;
  }

  .bold {
    font-weight: bold;
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

// .seaice-content {
//   position: relative;
// }

// display 70% width on desktop
@media screen and (min-width: 768px) {
  .chart-wrapper {
    width: 75%;
  }
}

// display 70% width on large screen sizes
@media screen and (min-width: 992px) {
  .chart-wrapper {
    width: 70%;
  }
}

// // display 70% width on extra large screen sizes
@media screen and (min-width: 1200px) {
  .chart-wrapper {
    width: 60%;
  }
}

// // display 70% width on extra large screen sizes
@media screen and (min-width: 1350px) {
  .chart-wrapper {
    width: 50%;
  }
}


</style>
