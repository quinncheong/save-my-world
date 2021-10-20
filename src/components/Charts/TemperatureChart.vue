<template>
  <div
    style="height: 600px; width: 600px; display: flex; flex-direction: column"
  >
    <form @submit="handleClick">
      <label>
        Select a country:
        <select v-model="country" >
          <option :key="country.name" v-for="country in countries" :value="country.name">{{country.name}}</option>
        </select>
      </label>

      <label>
        Select a year (must be multiples of 20):
        <input v-model="year" type="number" required />
      </label>
      <button >Get Data</button>
    </form>

    <vue3-chart-js
      :id="doughnutChart.id"
      ref="chartRef"
      :type="doughnutChart.type"
      :data="doughnutChart.data"
      :options="doughnutChart.options"
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
    const year = ref(2000);

    const doughnutChart = {
      id: "doughnut",
      type: "doughnut",
      data: {
        labels: [""],
        datasets: [
          {
            backgroundColor: [
              "#41B883",
              // '#E46651',
              // '#00D8FF',
              // '#DD1B16'
            ],
            data: [40, 20, 80, 10],
          },
        ],
      },
      options: {
        plugins: {},
      },
    };

    // Function to load the new data
    const handleClick = async (e) => {
      e.preventDefault();
      let baseUrl =
        "http://climatedataapi.worldbank.org/climateweb/rest/v1/country/annualavg/tas";
      let isoCountry = iso.whereCountry(country.value).alpha3;
      let startYear = year.value;
      let endYear = startYear + 19;
      let fullUrl = `${baseUrl}/${startYear}/${endYear}/${isoCountry}`;
      console.log(fullUrl);
      
      try {
        let res = await axios.get(fullUrl);
        if (!res) {
          throw Error("Error in accessing API");
        }

        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const updateChart = () => {
      doughnutChart.options.plugins.title = {
        text: "Updated no Chart",
        display: true,
      };
      doughnutChart.data.labels = ["Cats", "Dogs", "Hamsters", "Dragons"];
      doughnutChart.data.datasets = [
        {
          backgroundColor: ["#333333", "#E46651", "#00D8FF", "#DD1B16"],
          data: [100, 20, 800, 20],
        },
      ];

      chartRef.value.update(null);
    };

    return {
      doughnutChart,
      chartRef,
      year,
      country,
      updateChart,
      handleClick,
      countries,
    };
  },
};

// Old options api
// export default {
//   name: "TempChart",
//   components: {
//     Vue3ChartJs,
//   },
//   data() {
//     return {
//       chartId: "doughnut",
//       chartType: "doughnut",
//       labels: ["vvvvv", "EmberJs", "ReactJs", "AngularJs"],
//       datasets: [
//         {
//           backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
//           data: [40, 20, 80, 10],
//         },
//       ],
//       options: {
//         plugins: {}
//       }
//     };
//   },
//   methods: {
//     changeData() {
//       console.log("inside the change");
//       this.labels = ["VueeeeeJs", "EmberJs", "ReactJs", "AngularJs"];
//       this.datasets = [
//         {
//           backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
//           data: [10, 20, 80, 10],
//         }
//       ]
//     },
//   },
//   computed: {
//     getData() {
//       let options = {
//         plugins: {}
//       }
//       let data = { labels: this.labels, datasets: this.datasets, options };
//       return data
//     },
//   },
// };
</script>
