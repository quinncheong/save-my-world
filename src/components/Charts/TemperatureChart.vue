<template>
  <div>
    <div class="card border-primary mb-3">
      <div class="card-body text-primary">
        <vue3-chart-js
          :id="lineChart.id"
          ref="chartRef"
          :type="lineChart.type"
          :data="lineChart.data"
          :options="lineChart.options"
        />
        <p class="card-text">
          <small class="text-muted">
            <span class="text-primary">Temperature</span>
            <span class="text-muted"> (°C)</span>
          </small>
          <br />
          This chart shows the the progression of changing temperature from the
          past to the present. It also shows the future predicted temperature
        </p>
      </div>
    </div>

    <form @submit="handleClick">
      <label class="form-label">
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

      <!-- <label class="form-label">
        Select a year (must be multiples of 20):
        <input v-model="year" type="number" required />
      </label> -->

      <button class="btn btn-success">Get Data</button>
    </form>
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

    const chartYears = {
      past: {
        1920: 1939,
        1940: 1959,
        1960: 1979,
        1980: 1999,
      },
      future: {
        2020: 2039,
        2040: 2059,
        2060: 2079,
        2080: 2099,
      },
    };

    const lineChart = {
      id: "line",
      type: "line",
      data: {
        labels: [],
        datasets: [],
      },
      options: {
        responsive: true,
        plugins: {
          decimation: {
            enabled: false,
            algorithm: "LTTB",
          },
        },
        interaction: {
          mode: "index",
          intersect: false,
        },
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
          y: {
            type: "linear",
            display: true,
            position: "left",
          },
          y1: {
            type: "linear",
            display: false,
            position: "right",
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
          xAxes: {
            display: true,
            autoSkip: true,
            ticks: {
              maxRotation: 0,
              // minRotation: 0,
              maxTicksLimit: 10,
            },
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
    // This function should make an http request to an aws lambnda function
    // It needs to send a payload with the isoCountry, startYear and endYear.
    const handleClick = async (e) => {
      e.preventDefault();
      let lamdbaFn =
        "https://u96rjz2jhi.execute-api.ap-southeast-1.amazonaws.com/getClimateData";
      let baseUrl =
        "https://climatedataapi.worldbank.org/climateweb/rest/v1/country/annualavg/tas";
      let isoCountry = iso.whereCountry(country.value).alpha3;
      // let startYear = year.value;
      // let endYear = startYear + 19;
      // let fullUrl = `${baseUrl}/${startYear}/${endYear}/${isoCountry}`;
      let pastPromiseArray = [];
      let futurePromiseArray = [];

      // iterate over chartyears to make request and push to the different arrays
      for (let key in chartYears) {
        let type = chartYears[key];
        if (key === "past") {
          for (let year in type) {
            let startYear = year;
            let endYear = type[year];
            let promise = axios.post(lamdbaFn, {
              isoCountry,
              startYear,
              endYear,
            });
            pastPromiseArray.push(promise);
          }
        } else {
          for (let year in type) {
            let startYear = year;
            let endYear = type[year];
            let promise = axios.post(lamdbaFn, {
              isoCountry,
              startYear,
              endYear,
            });
            futurePromiseArray.push(promise);
          }
        }
      }

      // wait for all the promises to resolve
      let pastData = await Promise.all(pastPromiseArray);
      let futureData = await Promise.all(futurePromiseArray);

      // get the data from the response
      let pastDataArray = pastData.map((data) => data.data);
      let futureDataArray = futureData.map((data) => data.data);

      console.log(pastDataArray);
      console.log(futureDataArray);

      try {
        // Manipulate the data
        let pastDataset = [];
        let futureDataset = [];

        let updatedLabels = [];
        let count = 1920;

        for (let dataset of pastDataArray) {
          for (let data of dataset) {
            pastDataset.push(data.annualData[0]);
            futureDataset.push(NaN);
            updatedLabels.push(Math.round(count, 0));
            count += 1.5;
          }
        }

        // Push last point of past dataset to the future dataset
        futureDataset.push(pastDataset[pastDataset.length - 1]);
        updatedLabels.push(Math.floor(count));

        count = 2020

        for (let dataset of futureDataArray) {
          for (let data of dataset) {
            if (data.scenario === 'b1') {
              continue
            }
            futureDataset.push(data.annualData[0]);
            updatedLabels.push(count);
            count += 1;
          }
        }
        lineChart.data.labels = updatedLabels;
        lineChart.data.datasets = [
          {
            label: "Past Temperatures [1920 - 2020]",
            backgroundColor: ["#41B883"],
            borderColor: "#41B883",
            data: pastDataset,
            fill: false,
            tension: 0.4,
            yAxisID: "y",
          },
          {
            label: "Future Predicted Temperatures [2020 - 2080]",
            backgroundColor: ["#00D8FF"],
            borderColor: "#00D8FF",
            // borderDash: [5, 5],
            data: futureDataset,
            fill: false,
            tension: 0.4,
            // yAxisID: "y1",
          },
        ];

        chartRef.value.update(null);
      } catch (error) {
        console.log(error);
      }
    };

    const updateChart = () => {
      lineChart.options.plugins.title = {
        text: "Updated no Chart",
        display: true,
      };
      lineChart.data.labels = ["Cats", "Dogs", "Hamsters", "Dragons"];
      lineChart.data.datasets = [
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
      lineChart,
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
