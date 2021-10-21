<template>
  <div class="temp-chart-bg mb-5">
    <form @submit="handleClick">
      <label>
        Select a country:
        <select v-model="country">
          <option
            :key="country.name"
            v-for="country in countries"
            :value="country.name"
          >
            {{ country.name }}
          </option>
        </select>
      </label>

      <label>
        Select a year (must be multiples of 20):
        <input v-model="year" type="number" required />
      </label>
      <button>Get Data</button>
    </form>

    <vue3-chart-js
      :id="barChart.id"
      ref="chartRef"
      :type="barChart.type"
      :data="barChart.data"
      :options="barChart.options"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import axios from "axios";
import { countries } from "countries-list";
import iso from "iso-3166-1"; // Library to key in country name and get iso no.

export default {
  name: "App",
  components: {
    Vue3ChartJs,
  },
  setup() {
    const chartRef = ref(null);
    const country = ref("");
    const year = ref(2020);

    const barChart = {
      id: "bar",
      type: "bar",
      data: {
        labels: ["2020", 2040],
        datasets: [
          {
            label: "Temperature Over Time",
            backgroundColor: [
              "#41B883",
              // "#E46651",
              // '#00D8FF',
              // '#DD1B16'
            ],
            borderColor: "#41B883",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        // plugins: {
        //   animation: false,
        //   parsing: false,
        //   title: {
        //     display: false,
        //     text: "Sentiments over runtime",
        //     fontSize: 20,
        //     position: "bottom",
        //   },
        //   legend: {
        //     display: true,
        //     position: "bottom",
        //     align: "start",
        //     labels: {
        //       usePointStyle: true,
        //       padding: 30,
        //       boxHeight: 6,
        //       boxWidth: 6,
        //       pointStyle: "circle",
        //     },
        //   },
        //   tooltip: {
        //     usePointStyle: true,
        //     boxHeight: 6,
        //     boxWidth: 6,
        //   },
        //   decimation: {
        //     enabled: false,
        //     algorithm: "LTTB",
        //   },
        //   maintainAspectRatio: false,
        // },
        scales: {
          yAxes: {
            display: true,
            stacked: false,
            // fontColor: '#4848EE',
          },
          xAxes: {
            display: false,
          },
          // xAxes: {
          //   display: true,
          //   stacked: false,
          //   type: "time",
          //   time: {
          //     unit: "second",
          //     tooltipFormat: "hh:mm:ss",
          //     displayFormats: {
          //       second: "hh:mm:ss",
          //     },
          //   },
          //   ticks: {
          //     autoSkip: true,
          //     maxTicksLimit: 5,
          //     maxRotation: 0,
          //   },
          // },
        },
      },
    };

    // Function to load the new data
    const handleClick = async (e) => {
      e.preventDefault();
      let geolocationUrl = "http://api.positionstack.com/v1/forward";
      let access_key = process.env.VUE_APP_POSITIONSTACK_API_KEY;
      let query = country.value

      try {
          let res = await axios.get(geolocationUrl, {
              params: {
                  access_key,
                  query
              }
          })
            if (!res) {
                throw Error('Error with access forward geolocation API')
            }

      } catch (err) {
          console.log(err)
      }

      let baseUrl =
        "http://api.openweathermap.org/data/2.5/air_pollution/history";
      let isoCountry = iso.whereCountry(country.value).alpha3;

      let appid = process.env.VUE_APP_OPENWEATHER_API_KEY;
      let lat;
      let long;
      let startYear = year.value;
      let endYear = startYear + 19;

      console.log(fullUrl);

      try {
        let res = await axios.get(fullUrl);
        if (!res) {
          throw Error("Error in accessing API");
        }

        console.log(res.data);
        // Manipulate the data
        let updatedDataset = [];
        let updatedLabels = [];
        let count = 1;
        for (let data of res.data) {
          updatedDataset.push(data.annualData[0]);
          updatedLabels.push(count);
          count += 1;
        }

        barChart.data.labels = updatedLabels;
        barChart.data.datasets = [
          {
            label: "Temperature Over Time",
            backgroundColor: ["#41B883"],
            borderColor: "#41B883",
            data: updatedDataset,
            fill: false,
          },
        ];

        chartRef.value.update(null);
      } catch (error) {
        console.log(error);
      }
    };

    const updateChart = () => {
      barChart.options.plugins.title = {
        text: "Updated no Chart",
        display: true,
      };
      barChart.data.labels = ["Cats", "Dogs", "Hamsters", "Dragons"];
      barChart.data.datasets = [
        {
          label: "Temperature Over Time",
          backgroundColor: ["#41B883"],
          borderColor: "#41B883",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
        },
      ];

      chartRef.value.update(null);
    };

    return {
      barChart,
      chartRef,
      year,
      country,
      updateChart,
      handleClick,
      countries,
    };
  },
};
</script>

<style lang="scss" scoped>
.temp-chart-bg {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: white;
  color: black;
  justify-content: center;
  margin: auto;
  width: 100%;
}
</style>
