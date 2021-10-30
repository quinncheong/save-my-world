<template>
  <div>
    <div class="card border-primary mb-3">
      <div class="card-header">Air Pollution</div>
      <div class="card-body text-info">
        <vue3-chart-js
          :id="barChart.id"
          ref="chartRef"
          :type="barChart.type"
          :data="barChart.data"
          :options="barChart.options"
        />

        <p class="card-text">
          <small class="text-muted">
            <span class="text-primary">Temperature</span>
            <span class="text-muted"> (°C)</span>
          </small>
          <br />
          This chart shows the the progression of changing temperature over a
          span of 19 years for the selected country.
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

      <label>
        Select a year (must be 2020 only):
        <input v-model="year" type="number" required />
      </label>
      <button class="btn btn-success">Get Data</button>
    </form>

  </div>
</template>

<script>
import { ref } from "vue";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import axios from "axios";
import moment from "moment";
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
            stacked: true,
            // fontColor: '#4848EE',
          },
          xAxes: {
            display: false,
            stacked: true,
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

      //   First portion is to do forward geocoding to get the lat and long
      let geolocationUrl = "http://api.positionstack.com/v1/forward";
      let access_key = process.env.VUE_APP_POSITIONSTACK_API_KEY;
      let query = country.value;
      let isoCountry = iso.whereCountry(country.value).alpha3;

      try {
        let res = await axios.get(geolocationUrl, {
          params: {
            access_key,
            query,
          },
        });
        if (!res) {
          throw new Error("Error with access forward geolocation API");
        }
        let geolocation = {};
        for (let country of res.data.data) {
          console.log(country);
          console.log(isoCountry);
          if (country.country_code === isoCountry) {
            geolocation.lat = country.latitude;
            geolocation.lon = country.longitude;
            break;
          }
        }
        console.log("Completed the first API request: ");
        console.log(geolocation);
        // After getting the lat and long, we can make a call
        // to get the air pollution history

        let baseUrl =
          "http://api.openweathermap.org/data/2.5/air_pollution/history";

        let appid = process.env.VUE_APP_OPENWEATHER_API_KEY;
        let { lat, lon } = geolocation;
        let startYear = year.value;
        let endYear = year.value + 1;

        let startUnix = moment(year.value, "YYYY").unix();
        let endUnix = moment(year.value + 2, "YYYY").unix();

        console.log(startYear);
        console.log(endYear);

        console.log(startUnix);
        console.log(endUnix);

        let res2 = await axios.get(baseUrl, {
          params: {
            lat,
            lon,
            start: startUnix,
            end: endUnix,
            appid,
          },
        });

        if (!res2) {
          throw Error("Error with access openweather API");
        }
        // Reaching here means that the openweather API was accessed smoothly

        console.log(res2.data);
        // This will get past year's data. So we need to filter appropriately

        let coDataset = [];
        let no2Dataset = [];
        let so2Dataset = [];

        let pollutionArray = res2.data.list;
        // increase by 672 means to get each month's entry
        for (let index = 0; index < pollutionArray.length; index += 672) {
          let monthPollution = pollutionArray[index];
          //  co, no, no2, o3, so2, pm2_5, pm10, nh3
          let { co, no2, so2 } = monthPollution.components;
          coDataset.push(co);
          no2Dataset.push(no2);
          so2Dataset.push(so2);
        }

        barChart.data.labels = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
        ];
        barChart.data.datasets = [
          {
            label: "Carbon Monoxide (CO)",
            backgroundColor: ["rgba(255, 99, 132, 0.8)"],
            borderColor: "rgb(255, 99, 132)",
            data: coDataset,
            fill: false,
          },
          {
            label: "Nitrogen dioxide (NO2)",
            backgroundColor: ["rgba(255, 159, 64, 0.8)"],
            borderColor: "rgb(255, 159, 64)",
            data: no2Dataset,
            fill: false,
          },
          {
            label: "Sulphur dioxide (SO2)",
            backgroundColor: ["rgba(255, 205, 86, 0.8)"],
            borderColor: "rgb(255, 205, 86)",
            data: so2Dataset,
            fill: false,
          },
        ];

        chartRef.value.update(null);
      } catch (err) {
        console.log(err);
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
